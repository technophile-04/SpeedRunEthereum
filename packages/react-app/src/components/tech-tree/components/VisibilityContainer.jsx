import React, { useEffect, useState } from "react";
import styled from "styled-components";
const css = require("styled-components").css;
function VisibilityContainer(props) {
  const { isVisible, children } = props;
  const [hasBeenVisible, setHasBeenVisibleState] = useState(isVisible);
  useEffect(() => {
    if (isVisible) {
      setHasBeenVisibleState(true);
    }
  }, [isVisible, setHasBeenVisibleState]);
  if (!hasBeenVisible) return null;
  return (
    <StyledVisibilityContainer data-testid="visibility-container" isVisible={isVisible}>
      {children}
    </StyledVisibilityContainer>
  );
}
export default VisibilityContainer;
const StyledVisibilityContainer = styled.div`
  transition: transform 0.15s ease-out, opacity 0.15s ease-out, max-height 0.15s ease-out, visibility 0.15s ease-out;
  height: auto;
  max-height: 10000px;
  min-width: 304px;
  opacity: 1;
  overflow: hidden;
  visibility: visible;
  transform: scaleY(1);
  transform-origin: top;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      transition: transform 0.15s ease-out, opacity 0.15s ease-out, max-height 0.15s ease-out,
        visibility 0.15s 0.15s ease-out;
      transform: scaleY(0);
      visibility: hidden;
      max-height: 0;
      width: 304px;
      opacity: 0;
    `}
`;
//# sourceMappingURL=VisibilityContainer.jsx.map
