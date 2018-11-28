import * as React from 'react';
import * as classNames from 'classnames';
import { Comparison } from '../comparison';
import ComparisonResult from './ComparisonResult';
import './ComparisonTableDataCell.css';

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
	<td className={classNames('ComparisonTableDataCell', {
		'ComparisonTableDataCell--is-equal': a === b,
		'ComparisonTableDataCell--is-last': isLast,
		'ComparisonTableDataCell--is-explicit': isExplicit,
	})}>
		<ComparisonResult comparison={comparison} />
	</td>
);

export default ComparisonTableDataCell;
