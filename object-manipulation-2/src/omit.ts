/* exported omit */
function omit(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const object: Record<string, unknown> = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      object[prop] = source[prop];
    }
  }
  return object;
}
