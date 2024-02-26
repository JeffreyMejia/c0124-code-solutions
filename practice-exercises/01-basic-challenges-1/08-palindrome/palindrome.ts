export function isPalindrome(str: string): boolean {
  let palindrome = ''
  for (let i = str.length-1; i > 0; i--){
    palindrome += str[i]
    palindrome.replace (" ", "")
    if (palindrome === str)
    return true
  }

  return false;
}
