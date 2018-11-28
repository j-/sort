import * as React from 'react';
import ComparisonTableHeaderCell from './ComparisonTableHeaderCell';
import ComparisonTableDataCell from '../containers/ComparisonTableDataCell';
import './ComparisonTable.css';

export interface Props {
	list: string[];
}

const ComparisonTable: React.StatelessComponent<Props> = ({ list }) => (
	<table className="ComparisonTable table table-borderless">
		<thead>
			<tr>
				<td />
				{
					list.map((b) => (
						<ComparisonTableHeaderCell vertical={true} key={b}>
							{b}
						</ComparisonTableHeaderCell>
					))
				}
			</tr>
		</thead>
		<tbody>
			{
				list.map((a) => (
					<tr key={a}>
						<ComparisonTableHeaderCell>
							{a}
						</ComparisonTableHeaderCell>
						{
							list.map((b) => (
								<ComparisonTableDataCell key={b} a={a} b={b} />
							))
						}
					</tr>
				))
			}
		</tbody>
	</table>
);

export default ComparisonTable;
