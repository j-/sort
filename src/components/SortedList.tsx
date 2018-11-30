import * as React from 'react';
import List from './List';

export interface Props {
	items: string[];
}

const SortedList: React.StatelessComponent<Props> = ({ items }) => (
	<List className="SortedList" items={items} />
);

export default SortedList;
