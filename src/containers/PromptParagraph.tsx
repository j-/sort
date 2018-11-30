import { connect, MapStateToProps } from 'react-redux';
import Paragraph, { Props as P } from '../components/Paragraph';
import { RootReducerState, getPrompt } from '../store';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	children: getPrompt(state),
	className: 'text-center',
});

export default connect(
	mapStateToProps,
	{},
)(Paragraph);
