import { connect, MapStateToProps } from 'react-redux';
import P, { Props } from '../components/P';
import { RootReducerState, getPrompt } from '../store';

const mapStateToProps: MapStateToProps<Props, Props, RootReducerState> = (state) => ({
	children: getPrompt(state),
	className: 'text-center',
});

export default connect(
	mapStateToProps,
	{},
)(P);
