function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;

    const diff: number[] = [];


    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (diff.length > 2) return false;
            diff.push(i);
        }
    }

    return diff.length === 0 || (diff.length === 2 && s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]);
};

