import * as React from 'react';
import CompareItems from './CompareItems';

export interface Props {
	a?: string | null;
	b?: string | null;
	onClickA: () => void;
	onClickB: () => void;
}

const MaybeCompareItems: React.StatelessComponent<Props> = ({
	a,
	b,
	onClickA,
	onClickB,
}) => (
	a && b ? (
		<CompareItems
			a={a}
			b={b}
			onClickA={onClickA}
			onClickB={onClickB}
		/>
	) : null
);

export default MaybeCompareItems;
