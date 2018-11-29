import { connect, MapStateToProps } from 'react-redux';
import ComparisonSummaryList from '../components/ComparisonSummaryList';
import { RootReducerState, getNumberOfComparisons } from '../store';

interface StateProps {
	comparisons: number;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	comparisons: getNumberOfComparisons(state),
});

export default connect(
	mapStateToProps,
)(ComparisonSummaryList);
