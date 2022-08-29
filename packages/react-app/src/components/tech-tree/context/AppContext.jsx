import * as React from 'react';
import { v4 as uuid } from 'uuid';
import reducer from './appContextReducer';
const AppContext = React.createContext({
    skillCount: {
        required: 0,
        optional: 0,
    },
    addToSkillCount: () => undefined,
    selectedSkillCount: {
        required: 0,
        optional: 0,
    },
    dispatch: () => '',
    resetId: '',
    resetSkills: () => undefined,
});
export const initialState = {
    selectedSkillCount: {
        required: 0,
        optional: 0,
    },
};
export function AppProvider({ children }) {
    const [resetId, setResetId] = React.useState('');
    const [skillCount, setSkillCount] = React.useState({
        required: 0,
        optional: 0,
    });
    const [state, dispatch] = React.useReducer(reducer, initialState);
    function addToSkillCount(skillCount) {
        return setSkillCount(prev => ({
            required: prev.required + skillCount.required,
            optional: prev.optional + skillCount.optional,
        }));
    }
    function resetSkills() {
        const action = {
            type: 'RESET_SKILLS',
        };
        dispatch(action);
        setResetId(uuid());
        return;
    }
    return (<AppContext.Provider value={{
        skillCount,
        dispatch,
        addToSkillCount,
        selectedSkillCount: state.selectedSkillCount,
        resetId,
        resetSkills,
    }}>
      {children}
    </AppContext.Provider>);
}
export default AppContext;
//# sourceMappingURL=AppContext.jsx.map