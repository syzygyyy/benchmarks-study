import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name' | 'onClick'>

const EtherscanIcon: React.FC<Props> = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.15604 9.50605C4.15606 9.39421 4.17813 9.28347 4.22099 9.18021C4.26384 9.07694 4.32663 8.98316 4.40575 8.90428C4.48488 8.82539 4.57878 8.76293 4.68206 8.7205C4.78534 8.67807 4.89597 8.6565 5.00759 8.65702L6.41937 8.66164C6.64447 8.66164 6.86035 8.75123 7.01953 8.9107C7.1787 9.07017 7.26812 9.28646 7.26812 9.51199V14.8607C7.42713 14.8135 7.63062 14.7631 7.85455 14.7103C8.00969 14.6737 8.14795 14.5857 8.24691 14.4606C8.34588 14.3354 8.39975 14.1804 8.39978 14.0208V7.38653C8.39978 7.16099 8.4892 6.94468 8.64837 6.78518C8.80753 6.62569 9.02342 6.53606 9.24853 6.53602H10.6646C10.8897 6.53606 11.1056 6.62569 11.2648 6.78518C11.4239 6.94468 11.5133 7.16099 11.5133 7.38653V13.5442C11.5133 13.5442 11.8676 13.4005 12.2125 13.2546C12.3406 13.2003 12.45 13.1094 12.5269 12.9932C12.6038 12.8771 12.6449 12.7408 12.645 12.6014V5.26058C12.645 5.03508 12.7344 4.81881 12.8935 4.65935C13.0527 4.49988 13.2685 4.41027 13.4936 4.41023H14.9082C15.1331 4.41045 15.3488 4.50013 15.5078 4.65958C15.6668 4.81903 15.7561 5.03519 15.7561 5.26058V11.3055C16.9825 10.415 18.2254 9.34393 19.2117 8.05611C19.3548 7.86917 19.4495 7.64966 19.4874 7.41714C19.5252 7.18463 19.505 6.94634 19.4286 6.72355C18.972 5.40752 18.2462 4.20148 17.2977 3.18259C16.3492 2.1637 15.1989 1.35441 13.9203 0.806507C12.6417 0.258602 11.263 -0.0158526 9.87245 0.000707133C8.48191 0.0172668 7.11013 0.324475 5.84489 0.902674C4.57966 1.48087 3.44883 2.31733 2.52476 3.35852C1.6007 4.3997 0.903763 5.62269 0.47854 6.94922C0.0533171 8.27576 -0.090823 9.67662 0.0553425 11.0622C0.201508 12.4477 0.634761 13.7874 1.32738 14.9956C1.44804 15.204 1.62558 15.3736 1.83912 15.4844C2.05265 15.5952 2.29332 15.6427 2.53286 15.6213C2.80045 15.5976 3.13362 15.5643 3.52974 15.5177C3.70214 15.4981 3.8613 15.4156 3.97691 15.286C4.09253 15.1564 4.15652 14.9887 4.1567 14.8148V9.50605"
      fill="currentColor"
    />
    <path
      d="M4.12598 18.084C5.61705 19.1707 7.37913 19.8231 9.21728 19.9688C11.0554 20.1145 12.898 19.7479 14.5411 18.9096C16.1842 18.0712 17.5638 16.7939 18.5272 15.2187C19.4907 13.6436 20.0004 11.8321 20.0001 9.98478C20.0001 9.75366 19.9894 9.52617 19.974 9.29935C16.3222 14.7562 9.57932 17.3072 4.12598 18.084"
      fill="currentColor"
    />
  </svg>
)

export default EtherscanIcon
