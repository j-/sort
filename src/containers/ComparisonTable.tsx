import { connect, MapStateToProps } from 'react-redux';
import ComparisonTable from '../components/ComparisonTable';
import { ComparisonData } from '../comparison-data';
import { RootReducerState, getUnsortedListItems, getComparisonData } from '../store';

interface StateProps {
	list: string[];
	data: ComparisonData;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	list: getUnsortedListItems(state),
	data: getComparisonData(state),
});

export default connect(
	mapStateToProps,
)(ComparisonTable);
