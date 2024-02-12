/* exported getKeys */
function getKeys(object: Record<string, string | number>): string[] {
  const keys: string[] = [];
  for (const prop in object) {
    keys.push(prop);
  }
  return keys;
}
