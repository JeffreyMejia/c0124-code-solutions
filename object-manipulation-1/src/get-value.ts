/* exported getValue */
function getValue(
  object: Record<string, string | number>,
  key: string
): string | number {
  return object[key];
}
