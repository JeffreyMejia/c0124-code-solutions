/* exported setValue */
function setValue(
  object: record<string, string | number>,
  key: string,
  value: any
): undefined {
  object[key] = value;
}
