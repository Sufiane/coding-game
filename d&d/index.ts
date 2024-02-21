/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N: number = 1
const input = '3d6 - 2'

const getDmgRange = (diceNumber: number, diceFaces: number, bonus: number, op: '+' | '-'): {
    min: number,
    max: number
} => {
    let min: number, max: number

    if (op === '+') {
        max = diceNumber * diceFaces + bonus
        min = diceNumber + diceFaces
    } else {
        max = diceNumber * diceFaces - bonus
        min = diceNumber - bonus
    }

    return {
        min,
        max
    }
}

for (let i = 0; i < N; i++) {
    const [inputs]: string[] = input.split(' ');
    const mdf: string = inputs[0];
    const S: '+' | '-' = inputs[1] as '+' | '-';
    const B = Number.parseInt(inputs[2]);

    const [M, F] = mdf.split('d').map(value => Number.parseInt(value));

    const { max, min } = getDmgRange(M, F, B, S)

    console.log(`${min} ${max}`);
}
