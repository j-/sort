import { Reducer } from 'redux';
import { isActionSetPrompt } from './actions';

export type ReducerState = string;

const DEFAULT_STATE: ReducerState = 'Which one is better?';

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetPrompt(action)) {
		return action.data.prompt;
	}

	return state;
};

export default reducer;

export const getPrompt = (state: ReducerState) => (
	state
);
