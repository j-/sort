import * as React from 'react';
import * as classNames from 'classnames';
import Button, { Props as ButtonProps } from './Button';
import './ComparisonToggleButton.css';

export interface Props extends ButtonProps {
	isEqual: boolean;
	isLast: boolean;
	isExplicit: boolean;
	isImplicit: boolean;
	isEmpty: boolean;
}

const ComparisonToggleButton: React.StatelessComponent<Props> = ({
	isEqual,
	isLast,
	isExplicit,
	isImplicit,
	isEmpty,
	className,
	children,
	...props
}) => (
	<Button
		className={classNames('ComparisonToggleButton', {
			'ComparisonToggleButton--is-equal': isEqual,
			'ComparisonToggleButton--is-last': isLast,
			'ComparisonToggleButton--is-explicit': isExplicit,
			'ComparisonToggleButton--is-implicit': isImplicit,
			'ComparisonToggleButton--is-empty': isEmpty,
		}, className)}
		{...props}
	>
		<span className="ComparisonToggleButton-inner">
			{children}
		</span>
	</Button>
);

export default ComparisonToggleButton;
