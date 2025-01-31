function countBits(n: number): number {
    return n.toString(2).split('1').length - 1;
}

function sortByBits(arr: number[]): number[] {
    return arr.sort((a, b) => {
        const bitCountA = countBits(a);
        const bitCountB = countBits(b);
        return bitCountA === bitCountB ? a - b : bitCountA - bitCountB;
    });
}
