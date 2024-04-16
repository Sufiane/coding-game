export function lengthOfLastWord(s: string): number {
    const words = s.match(/\b\w+\b/g)

    if (!words) {
        return 0
    }

    return words.at(-1)!.length
}
