import * as React from 'react';
import Svg, {Text, TSpan, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      data-name="Component 2 \u2013 1"
      width={94}
      height={16.583}
      viewBox="0 0 334 156.583"
      {...props}>
      <Text
        transform="translate(0 80)"
        fill="#707070"
        fontSize={90}
        fontFamily="SinhalaMN, Sinhala MN">
        <TSpan x={0} y={0}>
          {'CoCoin'}
        </TSpan>
      </Text>
      <Path
        data-name="Line 1"
        transform="translate(93.5 22.5)"
        fill="none"
        stroke="#707070"
        strokeLinecap="round"
        strokeWidth={3}
        d="M0 0L0 70"
      />
      <Path
        data-name="Line 2"
        transform="translate(103.5 22.5)"
        fill="none"
        stroke="#707070"
        strokeLinecap="round"
        strokeWidth={3}
        d="M0 0L0 70"
      />
      <Text
        data-name="CoCoin"
        transform="translate(0 131.583)"
        fill="#707070"
        fontSize={90}
        fontFamily="SinhalaMN, Sinhala MN"
        opacity={0.542}>
        <TSpan x={0} y={0}>
          {'CoCoin'}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default SvgComponent;
