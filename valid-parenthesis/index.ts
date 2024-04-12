const CloseOpenMapping = {
    ')': '(',
    '}': '{',
    ']': '[',
}

export function isValid(s: string): boolean {
    if (s.length < 2) {
        return false;
    }

    const openChar: string[] = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                openChar.push(s[i])
                break;
            case ')':
            case ']':
            case '}': {
                if (openChar[openChar.length - 1] !== CloseOpenMapping[s[i]]) {
                    return false
                }

                openChar.pop()
                break
            }
            default:
        }
    }

    return openChar.length === 0
}
