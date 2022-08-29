import { useEffect, useContext, useState } from 'react';
import FilterContext from '../../context/FilterContext';
function FilterListener({ setVisibility, isVisible, treeId, disabled }) {
    const { filtersMatches } = useContext(FilterContext);
    const [hasLoaded, setLoadingState] = useState(false);
    useEffect(() => {
        if (!hasLoaded) {
            return setLoadingState(true);
        }
        if (disabled) {
            return setVisibility(false);
        }
        if (!filtersMatches) {
            if (isVisible === true)
                return;
            return setVisibility(true);
        }
        if (!filtersMatches.has(treeId)) {
            if (isVisible === false)
                return;
            return setVisibility(false);
        }
        if (isVisible === true)
            return;
        return setVisibility(true);
    }, [filtersMatches]);
    return null;
}
export default FilterListener;
//# sourceMappingURL=FilterListener.jsx.map