/* exported invert */
function invert(source: any): Record<string, unknown> {
  const object: Record<string, unknown> = {};
  for (const key in source) {
    object[source[key]] = key;
  }
  return object;
}
