import * as React from 'react';
const FilterContext = React.createContext({
    filtersMatches: null,
    handleFilter: () => null,
    addToSkillMap: () => null,
});
export function FilterProvider(props) {
    const [skillMap, setSkillMap] = React.useState({});
    const [filtersMatches, setMatches] = React.useState(null);
    // keep the map, also keep track of the sorted keys. (if performance becomes a concern).
    function handleFilter(query) {
        if (query.trim() === '') {
            return setMatches(null);
        }
        const sanitizedQuery = query.toLowerCase();
        const skills = Object.keys(skillMap);
        const filteredSkills = skills.filter(key => key.includes(sanitizedQuery));
        const treeIds = new Set(filteredSkills.map(skill => skillMap[skill]));
        return setMatches(treeIds);
    }
    function addToSkillMap(skillMap) {
        return setSkillMap(prev => ({
            ...prev,
            ...skillMap,
        }));
    }
    return (<FilterContext.Provider value={{
        filtersMatches,
        handleFilter,
        addToSkillMap,
    }}>
      {props.children}
    </FilterContext.Provider>);
}
export default FilterContext;
//# sourceMappingURL=FilterContext.jsx.map