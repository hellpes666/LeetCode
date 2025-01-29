const RANGE_OF_UPPERCASE_LETTERS_ASCII: number[] = [65, 90]
const DIFFERENCE_UPPER_LOWER_ASCII: number = 32 // we should add this const to the upper letter


function checkUpperCase(letter: string): boolean {
    const letterAsciiCode = letter.charCodeAt(0);
    return letterAsciiCode >= RANGE_OF_UPPERCASE_LETTERS_ASCII[0] && letterAsciiCode <= RANGE_OF_UPPERCASE_LETTERS_ASCII[1] ? true : false
}

function toLowerCase(s: string): string {
    let result: string = ''    

    for (let letter of s){
        if (checkUpperCase(letter)){
            const letterAsciiCode = letter.charCodeAt(0);
            result += String.fromCharCode(letterAsciiCode + DIFFERENCE_UPPER_LOWER_ASCII);
        } else {
            result += letter
        }
    }

    return result
}
