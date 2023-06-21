# Mochi contest details
- $70,000 worth of ETH main award pot
- $10,000 worth of ETH gas optimization award pot
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code423n4.com/2021-10-mochi-contest/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts October 21, 2021 00:00 UTC
- Ends October 27, 2021 23:59 UTC

## Contents
- [Contest Scope](#runner-contest-scope)
- [Protocol Overview](#bookmark_tabs-protocol-overview)
- [Smart Contract Overview](#mag-smart-contract-overview)
    - [Core](#globe_with_meridians-core)
    - [CSSR](#money_with_wings-cssr)
    - [Router](#-router) 
    - [Potential Concerns](#fire-potential-concerns)
    - [Known Issues](#closed_book-known-issues)
    - [How to setup the contract dev environment](#desktop_computer-how-to-setup-the-contract-dev-environment)
    - [How to run tests](#question-how-to-run-tests)

| Glossary| |
|-------------------------------|------------------------------------------------------|
| USDM | $1 peg-target stable coin minted through MochiVault |
| CSSR | Price feed for getting the price of certain collateral |
| Stability Fee | Fee charged per year for minting USDM  |
| Credit Cap | Max amount of usdm minted for collateral |
| Utilization Ratio | ratio of used credit cap (debt generated by collateral / credit cap) |
| Long-Tail Assets | assets that have traditionally low liquidity |
| Dutch Auction | the bidding starts at the highest asking amount and gets lowered until the winning bid |

## :runner: Contest Scope
Representatives from Mochi.fi will be available in the Code Arena Discord to answer any questions during the contest period. The main focus will be to find bugs, logic errors and vulnerabilities. Another important goal is to find ways to optimise ​gas costs for users interacting with the protocol and specifically with the Mochi CSSR as outlined [here](#-CSSR).

## :bookmark_tabs: Protocol Overview

Mochi puts your NFTs and long-tail assets to work as collateral while maintaining exposure to their long-term value. An autonomously governed protocol, Mochi bridges the gap between NFTs and DeFi to pioneer a new way to maximize the utility of emerging digital assets.

By using CSSR, Mochi can use any tokens with appropriate liquidity on dexes to enable minting of the USDM stable coin.

## :mag: Smart Contract Overview
### :globe_with_meridians: Core
- :gear: MochiEngine.sol
    - sloc : 94
    - This contract is where all contracts(componenets) are connected. Contract addresses are registered and modified through governance.
- :page_facing_up: MochiProfileV0.sol
    - sloc : 283
    - This contract is the contract that is reponsible of storing asset's stability fee, credit cap, etc...
- 🈹NoDiscountProfile.sol
    - sloc : 11
    - This contract does nothing now but will be giving out discount info when we have the discount event scheduled.
- :moneybag: Usdm.sol
    - sloc : 77
    - This represents stable coin(ERC20) minted while borrowing through `MochiVault`. Flash minting is supported. Minting can only be executed through `USDMMinter`
- :pick: USDMMinter.sol
    - sloc : 56
    - `USDM` can only be minted through this contract. Initially, any vaults deployed through `MochiVaultFactory` can execute mint function.
- :sparkles: MochiNFT.sol
    - sloc : 59
    - Every nft represents a position of debt. when user deposit/withdraw/borrow/repay through `MochiVault`, it actually means the action occurs in position. Every action of `MochiVault` requires NFT position. NFT minting should only be able through `MochiVault` deployed through `MochiVaultFactory`.
- :lock: MochiVault.sol
    - sloc : 374
    - Vault is deployed per asset(ex. usdc, dai, yfi, weth, ...). And every vault is actually a minimal beacon proxy deployed through `MochiVaultFactory` to reduce deployment cost.
    - functions
        > **notice** executing any of the functions below should invoke fee accuration
        > calcualting collateral factor involves CSSR interaction
        - mint
            - mint `MochiNFT` which represents the position
        - deposit
            - deposits collateral to prepare for debt. Depositing means increasing collateral amount locked in the position.
        - withdraw
            - withdraws collateral. should fail if collateral is not enough, should fail if collateral factor is too low
        - borrow
            - borrows(actually mints) x amount of usdm from protocol. should fail if collateral factor is too low, should fail if exceeds credit cap.
        - repay
            - repays borrowed usdm.
        - liquidate
            - when collateral ratio goes over liquidation ratio, it can be in liquidatable status, it can be liquidated through `liquidate` function. this should be done by, repaying debt on behalf of position and get the collateral. this can only be called through `DucthAuctionLiquidator`
- :factory:	MochiVaultFactory.sol
    - sloc : 58
    - This is the contract that deploys minimal beacon proxy that uses `MochiVault` as template.
- :hammer: DutchAuctionLiquidator.sol
    - sloc : 124
    - This is the contract that can call the `liquidate` function for vaults. DutchAuctionLiquidator has two steps for liquidation. (1) trigger (2) settle. (1) trigger will start the dutch auction for liquidation, (2) settle will be done through buying out the dutch auction. buyout price is calcualted throught simple linear 
### :money_with_wings: CSSR
CSSR is composed of 3 parts
(1) router : routes request to appropriate adapter/source to get the price
(2) adapter : data processing unit to convert the price for certain token. (ex. uniswapV2LPAdapter is for calculating uniswap v2 lp token price)
(3) source: data source for getting the price for token.(ex. uniswap v2 cssr, sushiswap v2 cssr)

#### 🛤 Router
- MochiCSSRV0.sol
    - sloc : 138
    - Router for whole cssr system. This contract should know what adapter it should use for given token address. If it doesn't know, it should query to default price source.

#### Adapter
- ChainlinkAdapter.sol
    - sloc : 75
    - Adapter for querying price for chainlink listed tokens. Simply queries chainlink price feed and converts to `float` type
- SushiswapV2LPAdapter.sol
    - sloc : 118
    - Adapter for querying price for sushiswap lp tokens. Price should be calcualted by querying the current underlying tokens in lp pool.
- UniswapV2LPAdapter.sol
    - sloc : 118
    - Adapter for querying price for Uniswap v2 lp tokens. Price should be calcualted by querying the current underlying tokens in lp pool.
- UniswapV2TokenAdapter.sol
    - sloc : 227
    - Adapter for querying simple erc20 tokens. Uses SushiswapV2CSSR, UniswapV2CSSR to query the exchange ratio between given token and key currencies(weth, wbtc, usdc, dai) and queries router for key currency price to calculate the given token's price. * althought this is named UniswapV2TokenAdapter, it uses both uni/sushi pool to query the price.

#### Source
- SushiswapV2CSSR.sol
    - sloc : 248
    - Price source to query the exchange ratio in certain sushiswap lp pool. Relies heavily on [Keydonix Oracle](https://github.com/Keydonix/uniswap-oracle) for code logics. Most changes are for transpiling the code to fix compile issues with solidity 0.8.x . **Currently experiencing weird bug with `invalid extension node` while fetching exchange ratio for Ren token(0x408e41876cccdc0f92210600ef50372656052a38) which does not happens on original Keydonix oracle**
- UniswapV2CSSR.sol
    - sloc : 248
    - Price source to query the exchange ratio in certain uniswap v2 lp pool. Relies heavily on [Keydonix Oracle](https://github.com/Keydonix/uniswap-oracle) for code logics. Most changes are for transpiling the code to fix compile issues with solidity 0.8.x .

### :fire: Potential Concerns

What we are currently experiencing is the high gas fee while interacting with our protocol and most of them is related to `MochiCSSR`. If collateral token is not supported by chainlink, it should query through UniswapV2CSSR/SushiswapV2CSSR and it requires reconstructing the block merkle patricia trie.
Also, while using the oracle, we are facing issue while querying price data of Ren with Sushi weth <> Ren pool.

### :closed_book: Known Issues

- Rebase tokens cannot be supported with the mochi vault
- Anyone can deploy vault by faking the uniswap liquidity. But, we are currently disabling non-governance deployment for now. So it won't happen on mainnet.

### :desktop_computer: How to setup the contract dev environment

for every repository, setup the environment first

`cp .env.example .env`

and fill the environment variables

```
ETHERSCAN_API_KEY=
MAINNET_RPC_URL=
MAINNET_FORK_BLOCK=
MAINNET_PRIVATE_KEY=
RINKEBY_RPC_URL=
RINKEBY_FORK_BLOCK=
RINKEBY_PRIVATE_KEY=
```
**mochi-library**
```
$ cd projects/mochi-library
$ npm install
```

**mochi-core**
```
$ cd projects/mochi-library
$ npm install
$ cd ../mochi-core
$ npm install
```

**mochi-cssr**
```
$ cd projects/mochi-library
$ npm install
$ cd ../mochi-cssr
$ npm install
```

### :question: How to run tests

`npm run test`