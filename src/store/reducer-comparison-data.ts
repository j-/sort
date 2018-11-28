import { Reducer } from 'redux';
import { ComparisonData, initialize } from '../comparison-data';
import { isActionSetList, isActionSetComparison } from './actions';
import { ComparisonMatrixObject } from '../comparison-matrix-object';

export interface ReducerState {
	unsortedList: string[];
	comparisonData: ComparisonData;
}

const DEFAULT_STATE: ReducerState = {
	unsortedList: [],
	comparisonData: {},
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetList(action)) {
		const { list } = action.data;
		return {
			...state,
			unsortedList: list,
			comparisonData: initialize(list),
		};
	}

	if (isActionSetComparison(action)) {
		const { a, b, value } = action.data;
		const list = state.unsortedList;
		const data = state.comparisonData;
		const matrix = new ComparisonMatrixObject(list, data);
		matrix.set(a, b, value);
		return {
			...state,
			comparisonData: matrix.getData(),
		};
	}

	return state;
};

export default reducer;

export const getUnsortedListItems = (state: ReducerState) => (
	state.unsortedList
);

export const getComparisonData = (state: ReducerState) => (
	state.comparisonData
);
