export function reverseString(str: string): string {
  let newWord = ''
  for(let i = str.length -1; i >= 0; i--) {
     newWord += str[i]
  }
  return newWord;
}
