import { connect, MapStateToProps } from 'react-redux';
import ComparisonTable from '../components/ComparisonTable';
import { RootReducerState, getUnsortedListItems } from '../store';

interface StateProps {
	list: string[];
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	list: getUnsortedListItems(state),
});

export default connect(
	mapStateToProps,
)(ComparisonTable);
