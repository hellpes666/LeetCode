function isHappy(n: number): boolean {
    const seen = new Set<number>();
    
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSum(n);
    }
    
    return n === 1;
};

function getSum(n: number): number {
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}