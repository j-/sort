import * as React from 'react';
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
						<th className="ComparisonTable-b" key={b}>
							<div className="ComparisonTable-b-container">
								<span className="ComparisonTable-b-text">{b}</span>
							</div>
						</th>
					))
				}
			</tr>
		</thead>
		<tbody>
			{
				list.map((a) => (
					<tr key={a}>
						<th className="ComparisonTable-a">
							<div className="ComparisonTable-a-container">
								<span className="ComparisonTable-a-text">{a}</span>
							</div>
						</th>
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
