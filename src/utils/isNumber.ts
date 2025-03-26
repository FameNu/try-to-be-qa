export default function isNumber(value: any): boolean {
  return typeof value === 'string' && /^[+-]?\d*\.?\d+$/.test(value)
}
