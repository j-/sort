import { connect, MapStateToProps } from 'react-redux';
import ComparisonTableDataCell from '../components/ComparisonTableDataCell';
import { Comparison } from '../comparison';

import {
	RootReducerState,
	getComparison,
	isExplicitComparison,
	isLastExplicitComparison,
} from '../store';

interface StateProps {
	comparison: Comparison | null;
	isExplicit: boolean;
	isLast: boolean;
}

interface OwnProps {
	a: string;
	b: string;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state, { a, b }) => ({
	comparison: getComparison(state, a, b),
	isExplicit: isExplicitComparison(state, a, b),
	isLast: isLastExplicitComparison(state, a, b),
});

export default connect(
	mapStateToProps,
)(ComparisonTableDataCell);
