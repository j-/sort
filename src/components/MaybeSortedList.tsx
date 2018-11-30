import * as React from 'react';
import SortedList from './SortedList';

export interface Props {
	items: string[] | null;
}

const MaybeSortedList: React.StatelessComponent<Props> = ({ items }) => (
	items ? (
		<SortedList items={items} />
	) : null
);

export default MaybeSortedList;
