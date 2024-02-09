/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const object: Record<string, unknown> = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      object[keys[i]] = source[keys[i]];
    }
  }
  return object;
}
