import * as React from 'react';
import * as classNames from 'classnames';
import { Comparison } from 'src/comparison';
import './ComparisonSummary.css';
import ComparisonResult from './ComparisonResult';

export interface Props {
	a: string;
	b: string;
	comparison: Comparison;
}

const ComparisonSummary: React.StatelessComponent<Props> = ({ a, b, comparison }) => (
	<div className="ComparisonSummary">
		<span
			className={classNames('ComparisonSummary-a', {
				'ComparisonSummary--greater': comparison === Comparison.GT,
			})}
		>
			{a}
		</span>

		&nbsp;

		<ComparisonResult comparison={comparison} />

		&nbsp;

		<span
			className={classNames('ComparisonSummary-b', {
				'ComparisonSummary--greater': comparison === Comparison.LT,
			})}
		>
			{b}
		</span>
	</div>
);

export default ComparisonSummary;
