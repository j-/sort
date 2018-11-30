import { connect, MapStateToProps } from 'react-redux';
import ComparisonTable from '../components/ComparisonTable';
import { RootReducerState, getUnsortedListItems, isComplete } from '../store';

interface StateProps {
	list: string[];
	complete: boolean;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	list: getUnsortedListItems(state),
	complete: isComplete(state),
});

export default connect(
	mapStateToProps,
)(ComparisonTable);
