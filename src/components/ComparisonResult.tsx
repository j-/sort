import * as React from 'react';
import { Comparison } from '../comparison';

export interface Props {
	comparison: Comparison | null;
}

const ComparisonResult: React.StatelessComponent<Props> = ({ comparison }) => (
	<>
		{
			comparison === null ? null :
			comparison === Comparison.LT ? '<' :
			comparison === Comparison.GT ? '>' :
			'='
		}
	</>
);

export default ComparisonResult;
