import { Reducer } from 'redux';
import { ComparisonData, initialize } from '../comparison-data';
import { isActionSetList, isActionSetComparison } from './actions';
import { ComparisonMatrixObject } from '../comparison-matrix-object';

export interface ReducerState {
	unsortedList: string[];
	comparisonData: ComparisonData;
	isComplete: boolean;
}

const DEFAULT_STATE: ReducerState = {
	unsortedList: [],
	comparisonData: {},
	isComplete: false,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetList(action)) {
		const { list } = action.data;
		return {
			...state,
			unsortedList: list,
			comparisonData: initialize(list),
			isComplete: false,
		};
	}

	if (isActionSetComparison(action)) {
		const { a, b, value } = action.data;
		const list = state.unsortedList;
		const data = state.comparisonData;
		const matrix = new ComparisonMatrixObject(list, data);
		matrix.set(a, b, value);
		const isComplete = ComparisonMatrixObject.isComplete(matrix);
		return {
			...state,
			comparisonData: matrix.getData(),
			isComplete,
		};
	}

	return state;
};

export default reducer;

export const getUnsortedListItems = (state: ReducerState) => (
	state.unsortedList
);

export const getComparison = (state: ReducerState, a: string, b: string) => (
	state.comparisonData[a][b]
);

export const isComplete = (state: ReducerState) => (
	state.isComplete
);
