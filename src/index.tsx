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
import { setList } from './store/actions';

const store = createStore(rootReducer, composeWithDevTools());
store.dispatch(setList(['good', 'best', 'better', 'worst', 'worse']));

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
