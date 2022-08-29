import React, { useState, useCallback } from "react";
import SkillTreeSegment from "./SkillTreeSegment";
import HSeparator from "./ui/HSeparator";
import VisibilityContainer from "./VisibilityContainer";
import CalculateNodeCount from "./CalculateNodeCount";
import { SkillTreeProvider } from "../context/SkillContext";
import styled from "styled-components";
import SkillTreeHeader from "./SkillTreeHeader";
import AddToFilterIndex from "./filter/AddToFilterIndex";
import FilterListener from "./filter/FilterListener";
import useMobile from "../hooks/useMobile";

function SkillTree({
  data,
  title,
  description,
  closedByDefault,
  treeId,
  savedData,
  handleSave,
  handleNodeSelect,
  collapsible = false,
  disabled = false,
}) {
  const isMobile = useMobile();
  const initialVisibility = !(closedByDefault || disabled);
  const [isVisible, setVisibility] = useState(initialVisibility);
  const memoizedToggleVisibility = useCallback(
    function toggleVisibility() {
      if (disabled) {
        return setVisibility(false);
      }
      if (!collapsible) {
        return setVisibility(true);
      }
      return setVisibility(!isVisible);
    },
    [isVisible, disabled, collapsible],
  );
  return (
    <>
      <AddToFilterIndex treeId={treeId} skills={data} />
      <FilterListener disabled={disabled} isVisible={isVisible} setVisibility={setVisibility} treeId={treeId} />
      <SkillTreeProvider
        treeId={treeId}
        savedData={savedData}
        handleSave={handleSave}
        sendNodeSelectDataToClient={handleNodeSelect}
      >
        <CalculateNodeCount data={data} />
        <SkillTreeContainer>
          <SkillTreeHeader
            isVisible={isVisible}
            disabled={disabled}
            handleClick={memoizedToggleVisibility}
            collapsible={collapsible}
            id={treeId}
            description={description}
            title={title}
          />
          <VisibilityContainer isVisible={isVisible}>
            <StyledSkillTree isCollapsible={collapsible}>
              {data.map((skill, i) => {
                const displaySeparator = data.length - 1 !== i && isMobile;
                return (
                  <React.Fragment key={skill.id}>
                    <SkillTreeSegment
                      shouldBeUnlocked
                      skill={skill}
                      hasParent={false}
                      parentPosition={0}
                      parentHasMultipleChildren={false}
                    />
                    <HSeparator display={displaySeparator} />
                  </React.Fragment>
                );
              })}
            </StyledSkillTree>
          </VisibilityContainer>
        </SkillTreeContainer>
      </SkillTreeProvider>
    </>
  );
}
export default SkillTree;
const SkillTreeContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0 8px 48px;
  min-width: 304px;

  @media (min-width: 900px) {
    margin: 0 8px 16px;
    padding: 16px;
  }
`;

/* This is the background container for tree */
const StyledSkillTree = styled.div`
  background: ${({ theme }) => theme.treeBackgroundColor};
  border: ${({ theme }) => theme.border};
  border-top: ${({ isCollapsible }) => (isCollapsible ? "0" : "auto")};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: row;
  justify-content: start;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: start;
  }
`;
//# sourceMappingURL=SkillTree.jsx.map
