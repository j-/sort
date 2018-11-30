import { combineReducers } from 'redux';
import * as comparisonData from './reducer-comparison-data';
import * as explicitComparisons from './reducer-explicit-comparisons';
import * as prompt from './reducer-prompt';

export interface RootReducerState {
	comparisonData: comparisonData.ReducerState;
	explicitComparisons: explicitComparisons.ReducerState;
	prompt: prompt.ReducerState;
}

export default combineReducers<RootReducerState>({
	comparisonData: comparisonData.default,
	explicitComparisons: explicitComparisons.default,
	prompt: prompt.default,
});

export const getUnsortedListItems = (state: RootReducerState) => (
	comparisonData.getUnsortedListItems(state.comparisonData)
);

export const getComparison = (state: RootReducerState, a: string, b: string) => (
	comparisonData.getComparison(state.comparisonData, a, b)
);

export const isComplete = (state: RootReducerState) => (
	comparisonData.isComplete(state.comparisonData)
);

export const isExplicitComparison = (state: RootReducerState, a: string, b: string) => (
	explicitComparisons.isExplicitComparison(state.explicitComparisons, a, b)
);

export const isLastExplicitComparison = (state: RootReducerState, a: string, b: string) => (
	explicitComparisons.isLastExplicitComparison(state.explicitComparisons, a, b)
);

export const getNumberOfComparisons = (state: RootReducerState) => (
	explicitComparisons.getNumberOfComparisons(state.explicitComparisons)
);

export const getComparisonByIndex = (state: RootReducerState, index: number) => (
	explicitComparisons.getComparisonByIndex(state.explicitComparisons, index)
);

export const getPrompt = (state: RootReducerState) => (
	prompt.getPrompt(state.prompt)
);
