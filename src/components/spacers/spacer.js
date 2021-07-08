import React from "react";
import styled from "styled-components";
import { useTheme } from "native-base";

const positionVariants = {
  top: "margin-top",
  right: "margin-right",
  left: "margin-left",
  bottom: "margin-bottom",
};

const sizeVariants = {
  //these values need to be renamed to make more semantic sense and/or the increments are too small
  xs: 1,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 16,
  xxl: 32,
  xxxl: 64,
};

const getVariant = (position, size, theme) =>
  `${positionVariants[position]}:${
    //you can provide the size value as a number or a string such as "sm", "xl", etc.
    typeof size === "number"
      ? theme.space[size]
      : theme.space[sizeVariants[size]]
  };`;

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "sm",
};

/*
Numerical values accepted by the spacer object
0: "0px"
0.5: "2px"
1: "4px" = "xs"
1.5: "6px"
2: "8px" = "sm"
2.5: "10px"
3: "12px"
3.5: "14px"
4: "16px" = "md"
5: "20px"
6: "24px"
7: "28px"
8: "32px" = "lg"
9: "36px"
10: "40px"
12: "48px"
16: "64px" = "xl"
20: "80px"
24: "96px"
32: "128px" = "xxl"
40: "160px"
48: "192px"
56: "224px"
64: "256px" = "xxxl"
72: "288px"
80: "320px"
96: "384px"
px: "1px"
*/
