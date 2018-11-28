import * as React from 'react';

export interface Props {
	items: string[];
}

const UnsortedList: React.StatelessComponent<Props> = ({ items }) => (
	<ul className="UnsortedList">
		{
			items.map((item) => (
				<li className="UnsortedList-item" key={item}>
					{item}
				</li>
			))
		}
	</ul>
);

export default UnsortedList;
