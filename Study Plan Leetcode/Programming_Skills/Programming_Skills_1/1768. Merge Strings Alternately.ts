function mergeAlternately(word1: string, word2: string): string {
    let mergedLine: string = '';

    const WORD1_LENGTH: number = word1.length;
    const WORD2_LENGTH: number = word2.length;

    const MINIMAL_ITERATION = Math.max(WORD1_LENGTH, WORD2_LENGTH);

    for (let i = 0; i < MINIMAL_ITERATION; i++) {
        const letterOfWord1: string = word1[i];
        const letterOfWord2: string = word2[i];

        if (letterOfWord1 && letterOfWord2) {
            mergedLine += letterOfWord1 + letterOfWord2;
        } else if (letterOfWord1 !== undefined) {
            mergedLine += letterOfWord1;
        } else {
            mergedLine += letterOfWord2;
        }
    }

    return mergedLine;
}
