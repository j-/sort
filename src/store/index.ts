import { combineReducers } from 'redux';
import * as comparisonData from './reducer-comparison-data';
import * as explicitComparisons from './reducer-explicit-comparisons';

export interface RootReducerState {
	comparisonData: comparisonData.ReducerState;
	explicitComparisons: explicitComparisons.ReducerState;
}

export default combineReducers<RootReducerState>({
	comparisonData: comparisonData.default,
	explicitComparisons: explicitComparisons.default,
});

export const getUnsortedListItems = (state: RootReducerState) => (
	comparisonData.getUnsortedListItems(state.comparisonData)
);

export const getComparisonData = (state: RootReducerState) => (
	comparisonData.getComparisonData(state.comparisonData)
);

export const isExplicitComparison = (state: RootReducerState, a: string, b: string) => (
	explicitComparisons.isExplicitComparison(state.explicitComparisons, a, b)
);
