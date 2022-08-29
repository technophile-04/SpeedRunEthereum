import React from 'react';
import styled from 'styled-components';
const Icon = React.memo(function ({ src, title, containerWidth }) {
    return (<StyledIcon data-testid="icon-container" containerWidth={containerWidth}>
      <Image src={src} alt={title}/>
    </StyledIcon>);
});
export default Icon;
const StyledIcon = styled.div.attrs(props => ({
    style: {
        height: `${props.containerWidth}px`,
        width: `${props.containerWidth}px`,
    },
})) `
  display: flex;
`;
const Image = styled.img `
  pointer-events: none;
  height: 75%;
  margin: auto;
  width: 75%;
`;
//# sourceMappingURL=Icon.jsx.map