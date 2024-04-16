export function isPalindrome(x: number): boolean {
    return x.toString(10) === x.toString(10).split('').reverse().join('')
}
