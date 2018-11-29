import * as React from 'react';
import ComparisonTable from '../containers/ComparisonTable';
import PromptInput from '../containers/PromptInput';
import UnsortedList from '../containers/UnsortedList';
import ComparisonSummaryList from '../containers/ComparisonSummaryList';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1 className="mt-5 mb-5">Sort</h1>

		<section className="mt-5 mb-5">
			<UnsortedList />
		</section>

		<section className="mt-5 mb-5">
			<PromptInput className="form-control" />
		</section>

		<section className="mt-5 mb-5">
			<ComparisonTable />
		</section>

		<section className="mt-5 mb-5">
			<ComparisonSummaryList />
		</section>

	</div>
);

export default App;
