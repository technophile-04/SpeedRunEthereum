import { useContext, useEffect } from 'react';
import FilterContext from '../../context/FilterContext';
function createSkillsTreeMap(treeId, skills) {
    const skillsTreeMap = {};
    function addSkillToMap(currentSkill) {
        currentSkill.forEach(skill => {
            if (skill.children.length > 0) {
                addSkillToMap(skill.children);
            }
            skillsTreeMap[skill.title.toLowerCase()] = treeId;
        });
    }
    addSkillToMap(skills);
    return skillsTreeMap;
}
function AddToFilterIndex(props) {
    const { skills, treeId } = props;
    const { addToSkillMap } = useContext(FilterContext);
    useEffect(() => {
        const skillsTreeMap = createSkillsTreeMap(treeId, skills);
        addToSkillMap(skillsTreeMap);
    }, []);
    return null;
}
export default AddToFilterIndex;
//# sourceMappingURL=AddToFilterIndex.jsx.map