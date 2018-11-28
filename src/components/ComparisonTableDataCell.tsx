import * as React from 'react';
import { Comparison } from '../comparison';
import ComparisonResult from './ComparisonResult';

export interface Props {
	a: string;
	b: string;
	comparison: Comparison | null;
	isExplicit: boolean;
}

const ComparisonTableDataCell: React.StatelessComponent<Props> = ({
	a,
	b,
	comparison,
	isExplicit,
}) => (
	<td className={a === b ? 'table-secondary' : isExplicit ? 'table-primary' : ''}>
		<ComparisonResult comparison={comparison} />
	</td>
);

export default ComparisonTableDataCell;
