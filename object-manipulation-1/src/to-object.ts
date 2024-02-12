/* exported toObject */
function toObject(
  keyValuePairs: string[] | (string & boolean[])
): Record<string, string | boolean> {
  const prop = keyValuePairs[0];
  const val = keyValuePairs[1];
  const object = {};
  object[prop] = val;
  return object;
}
