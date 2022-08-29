import React from 'react';
import styled from 'styled-components';
import { SELECTED_STATE, LOCKED_STATE } from '../../components/constants';
import { StyledAngledLine } from './AngledLine';
const keyframes = require('styled-components').keyframes;
const css = require('styled-components').css;
function UpperAngledLine(props) {
    const { direction, state } = props;
    return (<AngledLineVerticalTop data-testid="upper-angled-line" direction={direction} selected={state === SELECTED_STATE} unlocked={state !== LOCKED_STATE}/>);
}
export default UpperAngledLine;
const AngledLineVerticalTop = styled(StyledAngledLine) `
  transform: rotate(90deg) translateY(-50%);
  transform-origin: 0 0;
  left: 50%;
  top: -1px;
  width: 29px;

  ${props => props.direction === 'right' &&
    `
      border-bottom-right-radius: 8px;
    `}

  ${props => props.direction === 'left' &&
    `
      border-top-right-radius: 8px;
    `}

  ${props => props.selected &&
    css `
      animation: ${slideDownAngledLineTop} 0.3s 1 ease-in;
      background-position: left bottom;
    `}
`;
const slideDownAngledLineTop = keyframes `
  from,
  33% {
    background-position: right top;
  }

  to {
    background-position: left bottom;
  }
`;
//# sourceMappingURL=UpperAngledLine.jsx.map