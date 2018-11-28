import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { setList, setLT, setGT } from './store/actions';

const store = createStore(rootReducer, composeWithDevTools());
store.dispatch(setList(['good', 'best', 'better', 'worst', 'worse']));
store.dispatch(setLT('good', 'better'));
store.dispatch(setLT('worse', 'better'));
store.dispatch(setLT('worst', 'better'));
store.dispatch(setGT('best', 'better'));
store.dispatch(setLT('worse', 'good'));
store.dispatch(setLT('worst', 'good'));
store.dispatch(setGT('worse', 'worst'));

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
