import { connect, MapStateToProps } from 'react-redux';
import UnsortedList from '../components/UnsortedList';
import { RootReducerState, getUnsortedListItems } from '../store';

interface StateProps {
	items: string[];
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	items: getUnsortedListItems(state),
});

export default connect(
	mapStateToProps,
)(UnsortedList);
