import * as React from 'react';
import Button from './Button';
import { Comparison } from '../comparison';

export interface Props {
	a: string;
	b: string;
	setComparison: (a: string, b: string, value: Comparison) => void;
}

const CompareItems: React.StatelessComponent<Props> = ({
	a,
	b,
	setComparison,
}) => (
	<div className="CompareItems">
		<div className="CompareItems-container CompareItems-container-a mb-2">
			<Button
				className="CompareItems-button btn btn-block btn-outline-secondary btn-lg pt-3 pb-3"
				onClick={() => setComparison(a, b, Comparison.GT)}
			>
				{a}
			</Button>
		</div>

		<div className="CompareItems-container CompareItems-container-b mb-2">
			<Button
				className="CompareItems-button btn btn-block btn-outline-secondary btn-lg pt-3 pb-3"
				onClick={() => setComparison(a, b, Comparison.LT)}
			>
				{b}
			</Button>
		</div>

		<div className="CompareItems-container CompareItems-container-dont-care mb-2">
			<Button
				className="CompareItems-button btn btn-block btn-outline-secondary"
				onClick={() => setComparison(a, b, Comparison.EQ)}
			>
				Don't care
			</Button>
		</div>
	</div>
);

export default CompareItems;
