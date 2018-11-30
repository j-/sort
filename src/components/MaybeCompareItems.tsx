import * as React from 'react';
import { Comparison } from '../comparison';
import CompareItems from './CompareItems';

export interface Props {
	a?: string | null;
	b?: string | null;
	setComparison: (a: string, b: string, value: Comparison) => void;
}

const MaybeCompareItems: React.StatelessComponent<Props> = ({
	a,
	b,
	setComparison,
}) => (
	a && b ? (
		<CompareItems
			a={a}
			b={b}
			setComparison={setComparison}
		/>
	) : null
);

export default MaybeCompareItems;
