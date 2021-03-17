import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgUnionGray(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 .75A5.625 5.625 0 1011 12 5.625 5.625 0 0011 .75zM7.625 6.375a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0z"
        fill="#919699"
      />
      <Path
        d="M6.5 14.25a5.625 5.625 0 00-5.625 5.625v2.25a1.125 1.125 0 002.25 0v-2.25A3.375 3.375 0 016.5 16.5h9a3.375 3.375 0 013.375 3.375v2.25a1.125 1.125 0 002.25 0v-2.25A5.625 5.625 0 0015.5 14.25h-9z"
        fill="#919699"
      />
    </Svg>
  )
}

export default SvgUnionGray
