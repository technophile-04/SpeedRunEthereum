import React from "react";
import styled from "styled-components";
import { SELECTED_STATE, LOCKED_STATE } from "../../components/constants";
import { StyledAngledLine } from "./AngledLine";
const keyframes = require("styled-components").keyframes;
const css = require("styled-components").css;
function MiddleAngledLine(props) {
  const { direction, parentPosition, childPosition, state } = props;
  const width = direction === "left" ? parentPosition - childPosition - 6 : childPosition - parentPosition - 6;
  return (
    <AngledLineHoriztonal
      data-testid="middle-angled-line"
      direction={direction}
      unlocked={state !== LOCKED_STATE}
      selected={state === SELECTED_STATE}
      width={width}
    />
  );
}
export default MiddleAngledLine;
const AngledLineHoriztonal = styled(StyledAngledLine)`
  border-left: none;
  border-right: none;
  top: 24px;
  left: 50%;
  width: ${props => props.width}px;
  transform: translateX(3px) scale(-1);

  ${props =>
    props.direction === "right" &&
    `
      transform: translateX(-3px) scale(-1);
      transform-origin: 0;
  `}

  ${props =>
    props.selected &&
    css`
      animation: ${slideDownAngledLineMiddle} 1s 1;
      background-position: left bottom;
    `}
`;
const slideDownAngledLineMiddle = keyframes`
  from,
  30% {
    background-position: right top;
  }

  to {
    background-position: left bottom;
  }
`;
//# sourceMappingURL=MiddleAngledLine.jsx.map
