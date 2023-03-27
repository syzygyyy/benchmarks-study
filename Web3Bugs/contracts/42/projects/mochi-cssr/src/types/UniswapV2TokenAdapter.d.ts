/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface UniswapV2TokenAdapterInterface extends ethers.utils.Interface {
  functions: {
    "aboveLiquidity(address,address)": FunctionFragment;
    "addKeyCurrency(address)": FunctionFragment;
    "cssrRouter()": FunctionFragment;
    "getLiquidity(address)": FunctionFragment;
    "getPrice(address)": FunctionFragment;
    "getPriceRaw(address)": FunctionFragment;
    "isKeyCurrency(address)": FunctionFragment;
    "keyCurrency(uint256)": FunctionFragment;
    "minimumLiquidity()": FunctionFragment;
    "owned()": FunctionFragment;
    "removeKeyCurrency(uint256,address)": FunctionFragment;
    "setMinimumLiquidity(uint256)": FunctionFragment;
    "support(address)": FunctionFragment;
    "sushiCSSR()": FunctionFragment;
    "uniswapCSSR()": FunctionFragment;
    "update(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "aboveLiquidity",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addKeyCurrency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cssrRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values: [string]): string;
  encodeFunctionData(functionFragment: "getPriceRaw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isKeyCurrency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "keyCurrency",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minimumLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owned", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeKeyCurrency",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "support", values: [string]): string;
  encodeFunctionData(functionFragment: "sushiCSSR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uniswapCSSR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "aboveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addKeyCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cssrRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceRaw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isKeyCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "keyCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeKeyCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "support", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sushiCSSR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapCSSR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export class UniswapV2TokenAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: UniswapV2TokenAdapterInterface;

  functions: {
    aboveLiquidity(
      _asset: string,
      _pairedWith: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    addKeyCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cssrRouter(overrides?: CallOverrides): Promise<[string]>;

    getLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sum: BigNumber }>;

    getPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber] & {
          numerator: BigNumber;
          denominator: BigNumber;
        }
      ] & {
        price: [BigNumber, BigNumber] & {
          numerator: BigNumber;
          denominator: BigNumber;
        };
      }
    >;

    getPriceRaw(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { sumPrice: BigNumber; sumLiquidity: BigNumber }
    >;

    isKeyCurrency(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    keyCurrency(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    minimumLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    owned(overrides?: CallOverrides): Promise<[string]>;

    removeKeyCurrency(
      _idx: BigNumberish,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumLiquidity(
      _liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    support(_asset: string, overrides?: CallOverrides): Promise<[boolean]>;

    sushiCSSR(overrides?: CallOverrides): Promise<[string]>;

    uniswapCSSR(overrides?: CallOverrides): Promise<[string]>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  aboveLiquidity(
    _asset: string,
    _pairedWith: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addKeyCurrency(
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cssrRouter(overrides?: CallOverrides): Promise<string>;

  getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
  >;

  getPriceRaw(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { sumPrice: BigNumber; sumLiquidity: BigNumber }
  >;

  isKeyCurrency(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  keyCurrency(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  minimumLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  owned(overrides?: CallOverrides): Promise<string>;

  removeKeyCurrency(
    _idx: BigNumberish,
    _currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumLiquidity(
    _liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  support(_asset: string, overrides?: CallOverrides): Promise<boolean>;

  sushiCSSR(overrides?: CallOverrides): Promise<string>;

  uniswapCSSR(overrides?: CallOverrides): Promise<string>;

  update(
    _asset: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    aboveLiquidity(
      _asset: string,
      _pairedWith: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addKeyCurrency(_currency: string, overrides?: CallOverrides): Promise<void>;

    cssrRouter(overrides?: CallOverrides): Promise<string>;

    getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;

    getPriceRaw(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { sumPrice: BigNumber; sumLiquidity: BigNumber }
    >;

    isKeyCurrency(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    keyCurrency(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    minimumLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    owned(overrides?: CallOverrides): Promise<string>;

    removeKeyCurrency(
      _idx: BigNumberish,
      _currency: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumLiquidity(
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    support(_asset: string, overrides?: CallOverrides): Promise<boolean>;

    sushiCSSR(overrides?: CallOverrides): Promise<string>;

    uniswapCSSR(overrides?: CallOverrides): Promise<string>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    aboveLiquidity(
      _asset: string,
      _pairedWith: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addKeyCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cssrRouter(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidity(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPriceRaw(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    isKeyCurrency(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    keyCurrency(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minimumLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    owned(overrides?: CallOverrides): Promise<BigNumber>;

    removeKeyCurrency(
      _idx: BigNumberish,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumLiquidity(
      _liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    support(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    sushiCSSR(overrides?: CallOverrides): Promise<BigNumber>;

    uniswapCSSR(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aboveLiquidity(
      _asset: string,
      _pairedWith: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addKeyCurrency(
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cssrRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidity(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceRaw(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isKeyCurrency(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keyCurrency(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owned(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeKeyCurrency(
      _idx: BigNumberish,
      _currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumLiquidity(
      _liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    support(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sushiCSSR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswapCSSR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      _asset: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
