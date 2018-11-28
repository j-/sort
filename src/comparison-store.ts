import { Comparison } from './comparison';

export interface ComparisonStore<T> {
	get(a: T, b: T): Comparison | null;
	set(a: T, b: T, value: Comparison): void;
}
