import * as React from 'react';
import * as classNames from 'classnames';
import ComparisonTableHeaderCell from './ComparisonTableHeaderCell';
import ComparisonToggleButton from '../containers/ComparisonToggleButton';
import './ComparisonTable.css';

export interface Props {
	list: string[];
	complete: boolean;
}

const ComparisonTable: React.StatelessComponent<Props> = ({ list, complete }) => (
	<table className={classNames('ComparisonTable', complete && 'ComparisonTable--complete')}>
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
								<td key={b}>
									<ComparisonToggleButton a={a} b={b} />
								</td>
							))
						}
					</tr>
				))
			}
		</tbody>
	</table>
);

export default ComparisonTable;
