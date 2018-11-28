import { Comparison } from './comparison';
import { ComparisonMatrix } from './comparison-matrix';
import { ComparisonData } from './comparison-data';

export class ComparisonMatrixObject extends ComparisonMatrix<string> {
	private grid: ComparisonData;

	constructor (items: string[], grid: ComparisonData) {
		super(items);
		this.grid = grid;
	}

	protected hasValue (a: string, b: string): boolean {
		return (
			Object.keys(this.grid).indexOf(a) > -1 &&
			Object.keys(this.grid[a]).indexOf(b) > -1
		);
	}

	protected getValue (a: string, b: string): Comparison | null {
		return this.grid[a][b];
	}

	protected setValue (a: string, b: string, value: Comparison): void {
		this.grid = {
			...this.grid,
			[a]: {
				...this.grid[a],
				[b]: value,
			},
		};
	}

	public getData () {
		return this.grid;
	}
}
