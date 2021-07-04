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
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
  xxxl: 6,
};

const getVariant = (position, size, theme) =>
  `${positionVariants[position]}:${theme.space[sizeVariants[size]]};`;

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
