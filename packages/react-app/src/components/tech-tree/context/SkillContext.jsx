import * as React from 'react';
import { mapValues } from 'lodash';
import AppContext from './AppContext';
import { SELECTED_STATE, LOCKED_STATE } from '../components/constants';
const SkillContext = React.createContext({
    mounting: true,
    skills: {},
    skillCount: 0,
    selectedCount: 0,
    updateSkillState: () => undefined,
    setSkillCount: () => undefined,
    handleNodeSelect: () => undefined,
    incrementSelectedCount: () => undefined,
    decrementSelectedCount: () => undefined,
});
export class SkillTreeProvider extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.storage = null;
        this.getTreeSkills = () => {
            if (this.props.savedData) {
                return this.props.savedData;
            }
            const { treeId } = this.props;
            const storedItems = this.storage.getItem(`skills-${treeId}`);
            if (storedItems === 'undefined' || storedItems === null) {
                return {};
            }
            return JSON.parse(storedItems);
        };
        this.incrementSelectedCount = (optional = false) => {
            const action = {
                type: optional ? 'SELECT_OPTIONAL_SKILL' : 'SELECT_REQUIRED_SKILL',
            };
            this.setState(prevState => {
                const { selectedCount } = prevState;
                return { selectedCount: selectedCount + 1 };
            });
            this.context.dispatch(action);
        };
        this.decrementSelectedCount = (optional = false) => {
            const action = {
                type: optional ? 'DESELECT_OPTIONAL_SKILL' : 'DESELECT_REQUIRED_SKILL',
            };
            this.setState(prevState => {
                const { selectedCount } = prevState;
                return { selectedCount: selectedCount - 1 };
            });
            this.context.dispatch(action);
        };
        this.resetSkills = () => {
            return this.setState(prevState => {
                const { skills } = prevState;
                const resettedSkills = mapValues(skills, (skill) => ({
                    optional: skill.optional,
                    nodeState: LOCKED_STATE,
                }));
                return {
                    skills: resettedSkills,
                    resetId: this.context.resetId,
                };
            });
        };
        this.setSkillCount = (skillCount) => {
            return this.setState({
                skillCount,
            });
        };
        this.handleNodeSelect = (key, state) => {
            return this.props.sendNodeSelectDataToClient({ key, state });
        };
        this.updateSkillState = (key, updatedState, optional = false) => {
            const { handleSave, treeId } = this.props;
            return this.setState(prevState => {
                const updatedSkills = {
                    ...prevState.skills,
                    [key]: {
                        optional,
                        nodeState: updatedState,
                    },
                };
                handleSave(this.storage, treeId, updatedSkills);
                return {
                    skills: updatedSkills,
                };
            });
        };
        this.state = {
            skills: {},
            skillCount: 0,
            selectedCount: 0,
            resetId: context.resetId,
            mounting: true,
        };
    }
    componentDidMount() {
        const { storage } = this.props;
        const { context } = this;
        if (storage) {
            this.storage = storage;
        }
        else {
            this.storage = localStorage;
        }
        const treeSkills = this.getTreeSkills();
        let selectedCount = 0;
        Object.keys(treeSkills).map(key => {
            if (treeSkills[key].nodeState === SELECTED_STATE) {
                selectedCount++;
                const action = {
                    type: treeSkills[key].optional
                        ? 'SELECT_OPTIONAL_SKILL'
                        : 'SELECT_REQUIRED_SKILL',
                };
                context.dispatch(action);
            }
        });
        this.setState({
            skills: treeSkills,
            selectedCount,
            mounting: false,
        });
        return null;
    }
    componentDidUpdate() {
        if (this.context.resetId !== this.state.resetId) {
            this.resetSkills();
        }
    }
    render() {
        return (<SkillContext.Provider value={{
            mounting: this.state.mounting,
            skills: this.state.skills,
            skillCount: this.state.skillCount,
            selectedCount: this.state.selectedCount,
            updateSkillState: this.updateSkillState,
            setSkillCount: this.setSkillCount,
            handleNodeSelect: this.handleNodeSelect,
            incrementSelectedCount: this.incrementSelectedCount,
            decrementSelectedCount: this.decrementSelectedCount,
        }}>
        {this.props.children}
      </SkillContext.Provider>);
    }
}
SkillTreeProvider.contextType = AppContext;
SkillTreeProvider.defaultProps = {
    handleSave(storage, treeId, skills) {
        return storage.setItem(`skills-${treeId}`, JSON.stringify(skills));
    },
    sendNodeSelectDataToClient() {
        return null;
    },
};
export default SkillContext;
//# sourceMappingURL=SkillContext.jsx.map