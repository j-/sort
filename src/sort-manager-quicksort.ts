import { SortManager } from './sort-manager';

/*

    algorithm quicksort(A, lo, hi) is
        if lo < hi then
            p := partition(A, lo, hi)
            quicksort(A, lo, p)
            quicksort(A, p + 1, hi)

    algorithm partition(A, lo, hi) is
        pivot := A[lo]
        i := lo - 1
        j := hi + 1
        loop forever
            do
                i := i + 1
            while A[i] < pivot

            do
                j := j - 1
            while A[j] > pivot

            if i >= j then
                return j

            swap A[i] with A[j]

*/

export class SortManagerQuicksort<T> extends SortManager<T> {
	private quicksort (A: T[], lo: number, hi: number): void {
		if (lo < hi) {
			const p = this.partition(A, lo, hi);
			this.quicksort(A, lo, p);
			this.quicksort(A, p + 1, hi);
		}
	};

	private partition (A: T[], lo: number, hi: number): number {
		const pivot = A[lo];
		let i = lo - 1;
		let j = hi + 1;
		while (true) {
			do {
				i = i + 1;
			} while (this.lt(A[i], pivot));

			do {
				j = j - 1;
			} while (this.gt(A[j], pivot));

			if (i >= j) {
				return j;
			}

			[A[i], A[j]] = [A[j], A[i]];
		}
	}

	public sort () {
		const items = this.getItems();
		try {
			this.quicksort(items, 0, items.length - 1);
			return items;
		} catch (err) {
			return null;
		}
	}
}
