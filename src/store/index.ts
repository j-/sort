import { Reducer } from 'redux';
import { isActionSetList } from './actions';

export interface RootReducerState {
	unsortedList: string[];
}

const DEFAULT_STATE: RootReducerState = {
	unsortedList: [],
};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetList(action)) {
		return {
			...state,
			unsortedList: action.data.list,
		};
	}

	return state;
};

export default reducer;

export const getUnsortedListItems = (state: RootReducerState) => (
	state.unsortedList
);
