import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name'>

const ZapperIcon: React.FC<Props> = ({ width = '25', height = '24', onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
    >
      <rect x="0.919678" y="0.254883" width="24.1361" height="24.0638" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_308:1531" transform="scale(0.00443112)" />
        </pattern>
        <image
          id="image0_308:1531"
          width="788"
          height="225"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default ZapperIcon
