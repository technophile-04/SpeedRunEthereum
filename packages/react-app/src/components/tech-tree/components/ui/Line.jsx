import React from 'react';
import styled from 'styled-components';
import { SELECTED_STATE, LOCKED_STATE } from '../../components/constants';
const keyframes = require('styled-components').keyframes;
const css = require('styled-components').css;
function Line({ state }) {
    return (<LineContainer>
      <StyledLine data-testid="straight-line" selected={state === SELECTED_STATE} unlocked={state !== LOCKED_STATE}/>
    </LineContainer>);
}
export default Line;
const LineContainer = styled.div `
  height: 56px;
  left: 4px;
  margin: 0 auto;
  position: relative;
  width: 4px;
`;
const slidedown = keyframes `
  from,
  50% {
    background-position: right top;
  }

  to {
    background-position: left bottom;
  }
`;
const StyledLine = styled.div `
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 51%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 210% 100%;
  background-position: right top;
  border: ${({ theme }) => theme.edgeBorder};
  height: 4px;
  opacity: 0.5;
  transform: rotate(90deg);
  transform-origin: 0 0;
  transition: opacity 0.6s;
  width: 56px;

  ${props => props.selected &&
    css `
      animation: ${slidedown} 1.2s 1 ease-out;
      background-position: left bottom;
    `}

  ${props => props.unlocked &&
    `
      opacity: 1;
    `}
`;
//# sourceMappingURL=Line.jsx.map