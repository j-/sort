import { connect, MapStateToProps } from 'react-redux';
import ComparisonSummary from '../components/ComparisonSummary';
import { RootReducerState, getComparisonByIndex } from '../store';
import { Comparison } from '../comparison';

interface StateProps {
	a: string;
	b: string;
	comparison: Comparison;
}

interface OwnProps {
	index: number;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state, { index }) => {
	const [a, b, comparison] = getComparisonByIndex(state, index);
	return { a, b, comparison };
};

export default connect(
	mapStateToProps,
)(ComparisonSummary);
