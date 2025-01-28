// @ts-nocheck
const updateOccurrences = (occurrences, letter) => {
    if (letter) {
        occurrences[letter] = (occurrences[letter] || 0) + 1;
    }
};

const HandleInsertOccurrences = (occurrences, letter1, letter2) => {
    updateOccurrences(occurrences, letter1);
    updateOccurrences(occurrences, letter2);
};


function findTheDifference(s: string, t: string): string {
    let allOccurrences: Record<string, number> = {};

    let result: string = '';

    const MINIMAL_ITERATIONS = Math.max(s.length, t.length);

    for (let i = 0; i < MINIMAL_ITERATIONS; i++) {
        const letterOfWord1: string = s[i];
        const letterOfWord2: string = t[i];

        HandleInsertOccurrences(allOccurrences, letterOfWord1, letterOfWord2);
    }

    for (let key in allOccurrences) {
        if (allOccurrences[key] % 2 == 1){
            result += key;
        }
    }
    return result
}
