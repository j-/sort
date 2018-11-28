import { Action } from 'redux';
import { Comparison } from '../comparison';

/* Set list */

export interface ActionSetList extends Action<'SetList'> {
	data: {
		list: string[];
	};
}

export const isActionSetList = (action: Action): action is ActionSetList => (
	action.type === 'SetList'
);

export const setList = (list: string[]): ActionSetList => ({
	type: 'SetList',
	data: {
		list,
	},
});

/* Set comparison */

export interface ActionSetComparison extends Action<'SetComparison'> {
	data: {
		a: string;
		b: string;
		value: Comparison;
	};
}

export const isActionSetComparison = (action: Action): action is ActionSetComparison => (
	action.type === 'SetComparison'
);

export const setComparison = (a: string, b: string, value: Comparison): ActionSetComparison => ({
	type: 'SetComparison',
	data: {
		a,
		b,
		value,
	},
});

export const setLT = (a: string, b: string) => setComparison(a, b, Comparison.LT);
export const setGT = (a: string, b: string) => setComparison(a, b, Comparison.GT);
export const setEQ = (a: string, b: string) => setComparison(a, b, Comparison.EQ);
