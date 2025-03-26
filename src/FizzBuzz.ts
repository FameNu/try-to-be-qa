import isNumber from "./utils/isNumber"

class FizzBuzz {
  private num: number | null

  constructor(num: number | string | null = null) {
    this.num = isNumber(num) ? parseFloat(num as string) : null
  }

  public getResult(): string[] {
    if (this.num === null || this.num < 1 || !Number.isInteger(this.num) || this.num % 1 !== 0) {
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
}

export default FizzBuzz
