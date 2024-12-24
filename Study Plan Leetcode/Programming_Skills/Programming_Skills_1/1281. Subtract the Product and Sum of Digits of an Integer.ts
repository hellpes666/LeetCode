function subtractProductAndSum(n: number): number {
    let product = 1;
    let sum = 0;
    while (n > 0) {
        product *= n % 10;
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return product - sum;
};