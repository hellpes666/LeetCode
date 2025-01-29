function isAlienSorted(words: string[], order: string): boolean {
    for (let wordIndex = 0; wordIndex < words.length - 1; wordIndex++) {
        const word1 = words[wordIndex];
        const word2 = words[wordIndex + 1];
        const minLength = Math.min(word1.length, word2.length);

        for (let i = 0; i < minLength; i++) {
            const index1 = order.indexOf(word1[i]);
            const index2 = order.indexOf(word2[i]);

            if (index1 < index2) {
                break;
            } else if (index1 > index2) {
                return false;
            }
        }

        if (
            word1.length > word2.length &&
            word1.slice(0, minLength) === word2.slice(0, minLength)
        ) {
            return false;
        }
    }
    return true;
}
