import * as React from 'react';
import Button from './Button';
import './CompareItems.css';

export interface Props {
	a: string;
	b: string;
	onClickA: () => void;
	onClickB: () => void;
}

const CompareItems: React.StatelessComponent<Props> = ({
	a,
	b,
	onClickA,
	onClickB,
}) => (
	<div className="CompareItems">
		<div className="CompareItems-container-a">
			<Button className="btn btn-light" onClick={onClickA}>
				{a}
			</Button>
		</div>
		<div className="CompareItems-container-b">
			<Button className="btn btn-light" onClick={onClickB}>
				{b}
			</Button>
		</div>
	</div>
);

export default CompareItems;
