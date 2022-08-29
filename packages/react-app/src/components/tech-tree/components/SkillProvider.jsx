import React from 'react';
import { AppProvider } from '../context/AppContext';
import { FilterProvider } from '../context/FilterContext';
function SkillProvider({ children }) {
    return (<AppProvider>
      <FilterProvider>{children}</FilterProvider>
    </AppProvider>);
}
export default SkillProvider;
//# sourceMappingURL=SkillProvider.jsx.map