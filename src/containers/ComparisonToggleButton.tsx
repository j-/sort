import * as React from 'react';
import { connect, MapStateToProps, MergeProps } from 'react-redux';
import ComparisonToggleButton, { Props } from '../components/ComparisonToggleButton';
import ComparisonResult from '../components/ComparisonResult';

import {
	RootReducerState,
	getComparison,
	isExplicitComparison,
	isLastExplicitComparison,
} from '../store';

interface StateProps {
	isEqual: boolean;
	isLast: boolean;
	isExplicit: boolean;
	isImplicit: boolean;
	isEmpty: boolean;
}

interface OwnProps {
	a: string;
	b: string;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state, { a, b }) => {
	const comparison = getComparison(state, a, b);
	const isEqual = a === b;
	const isLast = isLastExplicitComparison(state, a, b);
	const isExplicit = isExplicitComparison(state, a, b);
	const isImplicit = comparison !== null && !isExplicit && !isEqual;
	const isEmpty = !comparison;
	return {
		isEqual,
		isLast,
		isExplicit,
		isImplicit,
		isEmpty,
		disabled: true,
		children: <ComparisonResult comparison={comparison} />,
	};
};

const mergeProps: MergeProps<StateProps, {}, OwnProps, Props> = (state, dispatch) => ({
	...state,
	...dispatch,
});

export default connect(
	mapStateToProps,
	{},
	mergeProps,
)(ComparisonToggleButton);
