import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m21 21-2-2m-8.5 1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
