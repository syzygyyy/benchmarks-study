import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name' | 'onClick'>

const ShoppingCartArrowDownIcon: React.FC<Props> = ({
  width = '24',
  height = '24',
  color = 'white',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0293 7.45886L13.0293 10.4589L10.0293 7.45886H12.0293V3.45886H14.0293V7.45886H16.0293Z"
        fill={color}
      />
      <path
        d="M9.0293 16.4589C8.4793 16.4589 8.0293 16.0089 8.0293 15.4589V10.4589H6.0293V15.4589C6.0293 17.1089 7.3793 18.4589 9.0293 18.4589H18.5293V16.4589H9.0293Z"
        fill={color}
      />
      <path
        d="M20.0293 5.45886L17.0293 12.1589C16.9293 12.3589 16.7793 12.4589 16.5793 12.4589H9.1293C8.9293 12.4589 8.7293 12.3089 8.6793 12.1089L6.2293 4.80886C5.9293 4.00886 5.1793 3.45886 4.3293 3.45886H2.5293V5.45886H4.3293L7.0793 13.7589C7.2293 14.1589 7.5793 14.4589 8.0293 14.4589H17.5293C17.9293 14.4589 18.2793 14.2089 18.4293 13.8589L22.2293 5.45886H20.0293Z"
        fill={color}
      />
      <path
        d="M2.5293 3.45886C2.26408 3.45886 2.00973 3.56422 1.82219 3.75176C1.63465 3.93929 1.5293 4.19365 1.5293 4.45886C1.5293 4.72408 1.63465 4.97843 1.82219 5.16597C2.00973 5.35351 2.26408 5.45886 2.5293 5.45886C2.79451 5.45886 3.04887 5.35351 3.2364 5.16597C3.42394 4.97843 3.5293 4.72408 3.5293 4.45886C3.5293 4.19365 3.42394 3.93929 3.2364 3.75176C3.04887 3.56422 2.79451 3.45886 2.5293 3.45886Z"
        fill={color}
      />
      <path
        d="M17.0293 18.4589C16.6315 18.4589 16.2499 18.6169 15.9686 18.8982C15.6873 19.1795 15.5293 19.561 15.5293 19.9589C15.5293 20.3567 15.6873 20.7382 15.9686 21.0195C16.2499 21.3008 16.6315 21.4589 17.0293 21.4589C17.4271 21.4589 17.8087 21.3008 18.09 21.0195C18.3713 20.7382 18.5293 20.3567 18.5293 19.9589C18.5293 19.561 18.3713 19.1795 18.09 18.8982C17.8087 18.6169 17.4271 18.4589 17.0293 18.4589ZM9.5293 18.4589C9.13147 18.4589 8.74994 18.6169 8.46864 18.8982C8.18733 19.1795 8.0293 19.561 8.0293 19.9589C8.0293 20.3567 8.18733 20.7382 8.46864 21.0195C8.74994 21.3008 9.13147 21.4589 9.5293 21.4589C9.92712 21.4589 10.3087 21.3008 10.59 21.0195C10.8713 20.7382 11.0293 20.3567 11.0293 19.9589C11.0293 19.561 10.8713 19.1795 10.59 18.8982C10.3087 18.6169 9.92712 18.4589 9.5293 18.4589Z"
        fill={color}
      />
      <path
        d="M17.0293 19.4589C16.8967 19.4589 16.7695 19.5115 16.6757 19.6053C16.582 19.6991 16.5293 19.8263 16.5293 19.9589C16.5293 20.0915 16.582 20.2186 16.6757 20.3124C16.7695 20.4062 16.8967 20.4589 17.0293 20.4589C17.1619 20.4589 17.2891 20.4062 17.3829 20.3124C17.4766 20.2186 17.5293 20.0915 17.5293 19.9589C17.5293 19.8263 17.4766 19.6991 17.3829 19.6053C17.2891 19.5115 17.1619 19.4589 17.0293 19.4589ZM9.5293 19.4589C9.39669 19.4589 9.26951 19.5115 9.17574 19.6053C9.08197 19.6991 9.0293 19.8263 9.0293 19.9589C9.0293 20.0915 9.08197 20.2186 9.17574 20.3124C9.26951 20.4062 9.39669 20.4589 9.5293 20.4589C9.66191 20.4589 9.78908 20.4062 9.88285 20.3124C9.97662 20.2186 10.0293 20.0915 10.0293 19.9589C10.0293 19.8263 9.97662 19.6991 9.88285 19.6053C9.78908 19.5115 9.66191 19.4589 9.5293 19.4589Z"
        fill={color}
      />
    </svg>
  )
}

export default ShoppingCartArrowDownIcon
