import * as React from 'react';
import ComparisonTableDataCell from '../containers/ComparisonTableDataCell';

export interface Props {
	list: string[];
}

const ComparisonTable: React.StatelessComponent<Props> = ({ list }) => (
	<table className="table table-borderless">
		<thead>
			<tr>
				<td />
				{
					list.map((b) => (
						<th key={b}>{b}</th>
					))
				}
			</tr>
		</thead>
		<tbody>
			{
				list.map((a) => (
					<tr key={a}>
						<th>{a}</th>
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
