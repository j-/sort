import * as React from 'react';
import * as classNames from 'classnames';
import './ComparisonTableHeaderCell.css';

export interface Props {
	vertical?: boolean;
}

const ComparisonTableHeaderCell: React.StatelessComponent<Props> = ({
	vertical,
	children,
}) => (
	<th className={classNames('ComparisonTableHeaderCell', {
		'ComparisonTableHeaderCell--vertical': vertical,
		'ComparisonTableHeaderCell--horizontal': !vertical,
	})}>
		<div className="ComparisonTableHeaderCell-container">
			<span className="ComparisonTableHeaderCell-text">
				{children}
			</span>
		</div>
	</th>
);

export default ComparisonTableHeaderCell;
