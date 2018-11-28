import { Action } from 'redux';

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
