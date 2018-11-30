import * as React from 'react';
import ComparisonTable from '../containers/ComparisonTable';
import PromptInput from '../containers/PromptInput';
import UnsortedList from '../containers/UnsortedList';
import ComparisonSummaryList from '../containers/ComparisonSummaryList';
import PromptParagraph from '../containers/PromptParagraph';
import CompareItems from '../containers/CompareItems';
import SortedList from '../containers/SortedList';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1 className="mt-5 mb-5">Sort</h1>

		<section className="mt-5 mb-5">
			<h2 className="mt-5 mb-5">List to sort</h2>
			<UnsortedList />
		</section>

		<section className="mt-5 mb-5">
			<h2 className="mt-5 mb-5">Prompt</h2>
			<PromptInput className="form-control" />
		</section>

		<section className="mt-5 mb-5">
			<h2 className="mt-5 mb-5">Comparisons</h2>
			<ComparisonTable />
		</section>

		<section className="mt-5 mb-5">
			<h2 className="mt-5 mb-5">Decisions</h2>
			<ComparisonSummaryList />

			<br />

			<PromptParagraph />
			<CompareItems />

		</section>

		<section className="mt-5 mb-5">
			<h2 className="mt-5 mb-5">Sorted</h2>
			<SortedList />
		</section>

	</div>
);

export default App;
