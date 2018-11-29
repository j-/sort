import * as React from 'react';
import ComparisonSummary from '../containers/ComparisonSummary';
import './ComparisonSummaryList.css';

export interface Props {
	comparisons: number;
}

const ComparisonSummaryList: React.StatelessComponent<Props> = ({ comparisons }) => {
	const children: React.ReactChild[] = [];

	for (let i = 0; i < comparisons; i++) {
		children.push(
			<li className="ComparisonSummaryList-item" key={i}>
				<ComparisonSummary index={i} />
			</li>
		);
	}

	return (
		<ul className="ComparisonSummaryList">
			{children}
		</ul>
	);
};

export default ComparisonSummaryList;
