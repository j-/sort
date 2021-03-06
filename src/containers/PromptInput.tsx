import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, getPrompt } from '../store';
import { setPrompt } from '../store/actions';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: getPrompt(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = (dispatch) => ({
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => (
		dispatch(
			setPrompt(e.currentTarget.value)
		)
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Input);
