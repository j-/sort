import * as React from 'react';
import { Comparison } from '../comparison';
import ComparisonResult from './ComparisonResult';

export interface Props {
	a: string;
	b: string;
	comparison: Comparison | null;
	isExplicit: boolean;
	isLast: boolean;
}

const ComparisonTableDataCell: React.StatelessComponent<Props> = ({
	a,
	b,
	comparison,
	isExplicit,
	isLast,
}) => (
	<td className={a === b ? 'table-secondary' : isLast ? 'table-success' : isExplicit ? 'table-primary' : ''}>
		<ComparisonResult comparison={comparison} />
	</td>
);

export default ComparisonTableDataCell;
