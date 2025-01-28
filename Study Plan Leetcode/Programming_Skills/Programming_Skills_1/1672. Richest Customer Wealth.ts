function countArraySum(arr: number[]): number {
    return arr.reduce((currentSum, currentNumber) => {
        return currentSum + currentNumber;
    }, 0);
}

function maximumWealth(accounts: number[][]): number {
    const wealths = accounts.map(countArraySum);
    const maxWealth = Math.max(...wealths)

    return maxWealth
}
