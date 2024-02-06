/* exported truncate */
function truncate(length: number, string: string): string {
  const word = string.slice(0, length) + '...';
  return word;
}
