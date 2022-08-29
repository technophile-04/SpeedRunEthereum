import React, { useCallback, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import SkillCountSubtitle from './SkillCountSubtitle';
import Tippy from '@tippy.js/react';
const css = require('styled-components').css;
function SkillTreeHeader(props) {
    const { handleClick, collapsible, isVisible, id, title, description, disabled, } = props;
    const { tooltipZIndex } = useContext(ThemeContext);
    const memoizedHandleKeyDown = useCallback(function handleKeyDown(e) {
        if (e.keyCode === 13) {
            handleClick();
        }
    }, [handleClick]);
    return (<StyledTippy zIndex={tooltipZIndex} enabled={Boolean(description)} content={description || ''}>
      <StyledSkillTreeHeader tabIndex={0} onKeyDown={memoizedHandleKeyDown} onPointerDown={handleClick} isCollapsible={collapsible} isDisabled={disabled}>
        <div style={{ position: 'relative' }}>
          <HeaderCaret isCollapsible={collapsible} isVisible={isVisible}>
            ▲
          </HeaderCaret>
          <SkillTreeTitle id={id}>{title}</SkillTreeTitle>
        </div>
        <SkillCountSubtitle />
      </StyledSkillTreeHeader>
    </StyledTippy>);
}
export default SkillTreeHeader;
const StyledSkillTreeHeader = styled.div `
  ${({ isDisabled }) => isDisabled &&
    css `
      opacity: ${({ theme }) => theme.disabledTreeOpacity};
    `}
  ${({ isCollapsible }) => isCollapsible &&
    css `
      background: ${({ theme }) => theme.treeBackgroundColor};
      border: ${({ theme }) => theme.border};
      border-radius: ${({ theme }) => theme.borderRadius};
      cursor: pointer;
      min-width: 300px;
      transition: ${({ theme }) => theme.headingHoverColorTransition};
      user-select: none;

      &:hover {
        background: ${({ theme }) => theme.headingHoverColor};
      }
    `}
`;
const HeaderCaret = styled.span `
  color: ${({ theme }) => theme.headingFontColor};
  display: ${({ isCollapsible }) => (isCollapsible ? 'inline' : 'none')};
  font-family: ${({ theme }) => theme.headingFont};
  font-size: ${({ theme }) => theme.headingFontSize};
  left: 8px;
  position: absolute;
  transform: rotate(90deg);
  transition: 0.15s transform ease-out;

  ${({ isVisible }) => isVisible &&
    css `
      transform: rotate(180deg);
    `}
`;
const StyledTippy = styled(Tippy) `
  background: ${({ theme }) => theme.tooltipBackgroundColor};
  color: ${({ theme }) => theme.tooltipFontColor};

  &[data-placement^='top'] {
    .tippy-arrow {
      border-top-color: ${({ theme }) => theme.tooltipBackgroundColor};
    }
  }
`;
const SkillTreeTitle = styled.h2 `
  font-family: ${({ theme }) => theme.headingFont};
  margin-bottom: 0;
  min-width: 152px;
  text-align: center;
`;
//# sourceMappingURL=SkillTreeHeader.jsx.map