import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import MaybeCompareItems from '../components/MaybeCompareItems';
import { RootReducerState, getNextA, getNextB } from '../store';

interface StateProps {
	a: string | null;
	b: string | null;
}

interface DispatchProps {
	onClickA: () => void;
	onClickB: () => void;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	a: getNextA(state),
	b: getNextB(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
	// TODO: Implement these
	onClickA: () => undefined,
	onClickB: () => undefined,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MaybeCompareItems);
