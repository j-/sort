import * as React from 'react';
import { ComparisonMatrix } from '../comparison-matrix';
import ComparisonResult from './ComparisonResult';

export default class ComparisonTable extends React.Component {
	private items: string[] = ['a', 'b', 'c'];
	private matrix = new ComparisonMatrix(this.items);

	render () {
		const { items, matrix } = this;
		return (
			<table className="table table-borderless">
				<thead>
					<tr>
						<td />
						{
							items.map((b) => (
								<th key={b}>{b}</th>
							))
						}
					</tr>
				</thead>
				<tbody>
					{
						items.map((a) => (
							<tr key={a}>
								<th>{a}</th>
								{
									items.map((b) => (
										<td key={b}>
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
	}
}
