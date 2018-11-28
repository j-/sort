import * as React from 'react';
import { Comparison } from '../comparison';

export interface Props {
	comparison: Comparison | null;
}

const ComparisonResult: React.StatelessComponent<Props> = ({ comparison }) => (
	<>
		{
			comparison === null ? null :
			comparison === Comparison.LT ? '\uff1c' :
			comparison === Comparison.GT ? '\uff1e' :
			'\uff1d'
		}
	</>
);

export default ComparisonResult;
