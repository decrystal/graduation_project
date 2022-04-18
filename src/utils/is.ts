export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isNull(val: string) {
  if (val.trim() === '') return true;
  return false;
}
