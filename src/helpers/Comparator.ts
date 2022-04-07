export type CompareFunction = (a: unknown, b: unknown) => number

export default class Comparator {
  compare: CompareFunction

  constructor(
    compareFunction: CompareFunction = Comparator.defaultCompareFunction
  ) {
    this.compare = compareFunction
  }

  static defaultCompareFunction(a: unknown, b: unknown) {
    if (a === b) {
      return 0
    }

    return (a as string | number) < (b as string | number) ? -1 : 1
  }

  equal(a: unknown, b: unknown) {
    return this.compare(a, b) === 0
  }

  lessThan(a: unknown, b: unknown) {
    return this.compare(a, b) < 0
  }

  greaterThan(a: unknown, b: unknown) {
    return this.compare(a, b) > 0
  }

  lessThanOrEqual(a: unknown, b: unknown) {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThanOrEqual(a: unknown, b: unknown) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }

  reverse() {
    const compareOriginal = this.compare
    this.compare = (a, b) => compareOriginal(b, a)
  }
}
