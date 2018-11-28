import * as React from 'react';
import ComparisonTable from './ComparisonTable';
import UnsortedList from '../containers/UnsortedList';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1 className="mt-5 mb-5">Sort</h1>

		<section className="mt-5 mb-5">
			<UnsortedList />
		</section>

		<ComparisonTable />
	</div>
);

export default App;
