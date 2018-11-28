import * as React from 'react';
import { ComparisonMatrixObject } from '../comparison-matrix-object';
import { ComparisonData } from '../comparison-data';
import ComparisonResult from './ComparisonResult';

export interface Props {
	list: string[];
	data: ComparisonData;
}

const ComparisonTable: React.StatelessComponent<Props> = ({ list, data }) => {
	const matrix = new ComparisonMatrixObject(list, data);
	return (
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
									<td key={b} className={a === b ? 'table-secondary' : ''}>
										<ComparisonResult comparison={matrix.get(a, b)} />
									</td>
								))
							}
						</tr>
					))
				}
			</tbody>
		</table>
	);
};

export default ComparisonTable;
