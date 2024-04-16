export function countStudents(
    students: (0 | 1)[],
    sandwiches: (0 | 1)[]
): number {
    while (students.some((student) => student === sandwiches[0])) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
        } else {
            students.push(students.shift())
        }
    }

    return students.length
}
