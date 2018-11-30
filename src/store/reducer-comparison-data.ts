import { Reducer } from 'redux';
import { ComparisonData, initialize } from '../comparison-data';
import { isActionSetList, isActionSetComparison } from './actions';
import { ComparisonMatrixObject } from '../comparison-matrix-object';
import { SortManagerQuicksort } from '../sort-manager-quicksort';

export interface ReducerState {
	unsortedList: string[];
	sortedList: string[] | null;
	comparisonData: ComparisonData;
	isComplete: boolean;
	nextA: string | null;
	nextB: string | null;
}

const DEFAULT_STATE: ReducerState = {
	unsortedList: [],
	sortedList: null,
	comparisonData: {},
	isComplete: false,
	nextA: null,
	nextB: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetList(action)) {
		const { list } = action.data;
		return {
			...state,
			unsortedList: list,
			comparisonData: initialize(list),
			isComplete: false,
			nextA: null,
			nextB: null,
		};
	}

	if (isActionSetComparison(action)) {
		const { a, b, value } = action.data;
		const list = state.unsortedList;
		const data = state.comparisonData;
		const matrix = new ComparisonMatrixObject(list, data);
		matrix.set(a, b, value);
		const isComplete = ComparisonMatrixObject.isComplete(matrix);
		const manager = new SortManagerQuicksort(matrix);
		const sortedList = manager.sort();
		let nextA = null;
		let nextB = null;
		if (!sortedList) {
			nextA = manager.lastA;
			nextB = manager.lastB;
		}
		return {
			...state,
			comparisonData: matrix.getData(),
			isComplete,
			sortedList,
			nextA,
			nextB,
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

export const getNextA = (state: ReducerState) => (
	state.nextA
);

export const getNextB = (state: ReducerState) => (
	state.nextB
);

export const isSorted = (state: ReducerState) => (
	state.sortedList !== null
);

export const getSortedListItems = (state: ReducerState) => (
	state.sortedList
);
