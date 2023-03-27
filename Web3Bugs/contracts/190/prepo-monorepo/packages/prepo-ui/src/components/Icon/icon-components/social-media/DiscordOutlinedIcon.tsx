import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name' | 'onClick'>

const DiscordOutlinedIcon: React.FC<Props> = ({ color = 'white', width = '25', height = '25' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.07076 3.22428C8.05826 3.22428 8.04582 3.22508 8.03332 3.22591C7.92749 3.23424 5.41803 3.4503 3.80969 4.74446C2.96969 5.52113 1.29016 10.061 1.29016 13.986C1.29016 14.0552 1.30808 14.1221 1.34224 14.1829C2.50141 16.2188 5.66293 16.7524 6.38293 16.7757H6.39596C6.52345 16.7757 6.64322 16.7147 6.71822 16.6113L7.44739 15.6104C5.48155 15.102 4.47754 14.2387 4.42004 14.1878C4.25504 14.042 4.2384 13.7913 4.38424 13.6263C4.46257 13.5371 4.57209 13.4912 4.68209 13.4912C4.77542 13.4912 4.86993 13.5238 4.94576 13.5905C4.96993 13.6122 6.81853 15.1807 10.4552 15.1807C14.0985 15.1807 15.9479 13.6047 15.9663 13.5889C16.0421 13.523 16.1366 13.4912 16.2299 13.4912C16.3399 13.4912 16.4486 13.5363 16.5278 13.6263C16.6728 13.7913 16.6578 14.0428 16.4936 14.1878C16.4353 14.2395 15.4305 15.1004 13.4646 15.6087L14.1938 16.6113C14.2688 16.7147 14.3886 16.7757 14.5161 16.7757H14.5291C15.2499 16.7532 18.4122 16.2196 19.5714 14.1829C19.6056 14.1229 19.6235 14.0552 19.6235 13.986C19.6235 10.061 17.9436 5.52073 17.0828 4.72656C15.4961 3.45073 12.987 3.23508 12.8803 3.22591C12.8695 3.22508 12.857 3.22428 12.8462 3.22428C12.6912 3.22428 12.549 3.31616 12.4848 3.45866C12.4798 3.46866 12.4252 3.59485 12.3644 3.79069C13.4135 3.96735 14.7019 4.32466 15.8686 5.04883C16.0553 5.16466 16.113 5.40983 15.9972 5.59733C15.9222 5.719 15.792 5.78613 15.6586 5.78613C15.587 5.78613 15.5145 5.76674 15.4487 5.72591C13.4437 4.48341 10.9385 4.42057 10.4568 4.42057C9.97516 4.42057 7.46993 4.4842 5.46659 5.72754C5.40076 5.76754 5.3283 5.78613 5.25663 5.78613C5.1233 5.78613 4.9923 5.72062 4.91646 5.59896C4.7998 5.41146 4.85838 5.16549 5.04504 5.04883C6.21171 4.32549 7.5009 3.96898 8.5509 3.79232C8.48924 3.59565 8.433 3.47028 8.42883 3.46028C8.36467 3.31778 8.22493 3.22428 8.07076 3.22428ZM10.4568 6.08724C10.7035 6.08724 12.9157 6.11692 14.5682 7.14193C14.8957 7.34526 15.2712 7.45442 15.657 7.45442C15.9845 7.45442 16.299 7.37958 16.5799 7.23958C17.094 8.53375 17.6992 10.5718 17.8934 12.666C17.86 12.6193 17.8243 12.5743 17.7859 12.5309C17.3943 12.0818 16.8274 11.8262 16.2316 11.8262C15.7341 11.8262 15.2519 12.0045 14.8986 12.3112C14.8377 12.3604 13.3777 13.5156 10.4568 13.5156C7.53683 13.5156 6.07769 12.3622 6.04602 12.3372C5.66852 12.0064 5.18538 11.8245 4.68372 11.8245C4.09122 11.8245 3.5267 12.0787 3.13586 12.5212C3.09503 12.567 3.05697 12.6152 3.0203 12.6644C3.21447 10.5719 3.81886 8.52966 4.33053 7.23633C4.61219 7.37716 4.9283 7.4528 5.25663 7.4528C5.64163 7.4528 6.0172 7.34526 6.34387 7.14193C7.99804 6.11609 10.2102 6.08724 10.4568 6.08724ZM7.86568 8.37077C7.09568 8.37077 6.47082 9.08419 6.47082 9.96419C6.47082 10.8442 7.09485 11.5576 7.86568 11.5576C8.63651 11.5576 9.26054 10.8442 9.26054 9.96419C9.26054 9.08336 8.63651 8.37077 7.86568 8.37077ZM13.048 8.37077C12.278 8.37077 11.6531 9.08419 11.6531 9.96419C11.6531 10.8442 12.2771 11.5576 13.048 11.5576C13.8188 11.5576 14.4428 10.8442 14.4428 9.96419C14.4428 9.08336 13.818 8.37077 13.048 8.37077Z"
      fill={color}
    />
  </svg>
)

export default DiscordOutlinedIcon
