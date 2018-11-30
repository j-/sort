import * as React from 'react';
import * as classNames from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLUListElement> {
	items: string[];
}

const List: React.StatelessComponent<Props> = ({ items, className, ...props }) => (
	<ul className={classNames('List', className)} {...props}>
		{
			items.map((item) => (
				<li className="List-item" key={item}>
					{item}
				</li>
			))
		}
	</ul>
);

export default List;
