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
	const record = getComparisonByIndex(state, index);
	console.log(record);
	const [a, b, comparison] = record;
	return { a, b, comparison };
};

export default connect(
	mapStateToProps,
)(ComparisonSummary);
