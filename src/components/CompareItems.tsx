import * as React from 'react';
import Button from './Button';
import { Comparison } from '../comparison';
import './CompareItems.css';

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
		<div className="CompareItems-container-a">
			<Button className="btn btn-light" onClick={() => setComparison(a, b, Comparison.GT)}>
				{a}
			</Button>
		</div>
		<div className="CompareItems-container-b">
			<Button className="btn btn-light" onClick={() => setComparison(a, b, Comparison.LT)}>
				{b}
			</Button>
		</div>
	</div>
);

export default CompareItems;
