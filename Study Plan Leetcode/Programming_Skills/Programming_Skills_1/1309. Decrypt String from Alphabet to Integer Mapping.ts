const DIFFERENCE_REPRESENTATION_ASCII = 96;

const checkHashLastPosition = (subLine: string): boolean => {
    return subLine.charAt(subLine.length - 1) === '#';
};

function freqAlphabets(s: string): string {
    let result: string = '';
    let i = 0;

    while (i < s.length) {
        // Проверяем, есть ли символ '#' через 2 позиции
        if (i + 2 < s.length && checkHashLastPosition(s.slice(i + 2, i + 3))) {
            result += String.fromCharCode(
                Number(s.slice(i, i + 2)) + DIFFERENCE_REPRESENTATION_ASCII,
            );
            i += 3; 
        } else {
            result += String.fromCharCode(Number(s[i]) + DIFFERENCE_REPRESENTATION_ASCII);
            i++; 
        }
    }

    return result;
}
