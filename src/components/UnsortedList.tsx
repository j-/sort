import * as React from 'react';
import List from './List';

export interface Props {
	items: string[];
}

const UnsortedList: React.StatelessComponent<Props> = ({ items }) => (
	<List className="UnsortedList" items={items} />
);

export default UnsortedList;
