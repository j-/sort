import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import MaybeCompareItems from '../components/MaybeCompareItems';
import { Comparison } from '../comparison';
import { RootReducerState, getNextA, getNextB } from '../store';
import { setComparison } from '../store/actions';

interface StateProps {
	a: string | null;
	b: string | null;
}

interface DispatchProps {
	setComparison: (a: string, b: string, value: Comparison) => void;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	a: getNextA(state),
	b: getNextB(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = ({
	setComparison,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MaybeCompareItems);
