import isNumber from "./utils/isNumber"

class FizzBuzz {
  private num: any

  constructor(num: any = null) {
    this.num = num
  }

  public getResult(): string[] {
    if (!this.num || this.isNotStringAndNumber(this.num) || this.num < 1 || !isNumber(this.num) || this.num % 1 !== 0) {
      return []
    }

    const list: string[] = []
    for (let i = 1; i <= this.num; i++) {
      list.push(this.calFizzBuzz(i))
    }

    return list
  }

  private calFizzBuzz(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 5 === 0) return 'Buzz'
    if (num % 3 === 0) return 'Fizz'
    return num.toString()
  }

  private isNotStringAndNumber(value: any): boolean {
    return typeof value !== 'string' && typeof value !== 'number'
  }
}

export default FizzBuzz
