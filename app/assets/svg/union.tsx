import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgUnion(props: SvgProps) {
  return (
    <Svg
      width={59}
      height={65}
      viewBox="0 0 59 65"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5.416c-8.86 0-16.042 7.182-16.042 16.042 0 8.86 7.182 16.041 16.042 16.041 8.86 0 16.042-7.182 16.042-16.041C45.542 7.598 38.36.416 29.5.416zm-9.625 16.042a9.625 9.625 0 1119.25 0 9.625 9.625 0 01-19.25 0z"
        fill="#82C85A"
      />
      <Path
        d="M16.667 38.916A16.042 16.042 0 00.625 54.958v6.416a3.208 3.208 0 006.417 0v-6.416a9.625 9.625 0 019.625-9.625h25.666a9.625 9.625 0 019.625 9.625v6.416a3.208 3.208 0 006.417 0v-6.416a16.042 16.042 0 00-16.042-16.042H16.667z"
        fill="#82C85A"
      />
    </Svg>
  )
}

export default SvgUnion