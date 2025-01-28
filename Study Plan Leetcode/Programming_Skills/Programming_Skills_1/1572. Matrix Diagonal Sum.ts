function diagonalSum(mat: number[][]): number {
    let mainDiagonal = 0;
    let additionalDiagonal = 0;

    let currentLeftIndex = 0;
    let currentRightIndex = mat[0].length - 1;

    for (let row of mat) {
        if (currentLeftIndex !== currentRightIndex) {
            additionalDiagonal += row[currentLeftIndex];
            mainDiagonal += row[currentRightIndex];
        } else {
            mainDiagonal += row[currentRightIndex];
        }

        currentLeftIndex += 1;
        currentRightIndex -= 1;
    }

    const totalSum: number = mainDiagonal + additionalDiagonal

    return totalSum;
}
