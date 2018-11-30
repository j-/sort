import { connect, MapStateToProps } from 'react-redux';
import MaybeSortedList from '../components/MaybeSortedList';
import { RootReducerState, getSortedListItems } from '../store';

interface StateProps {
	items: string[] | null;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	items: getSortedListItems(state),
});

export default connect(
	mapStateToProps,
)(MaybeSortedList);
