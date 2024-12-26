function sumOddLengthSubarrays(arr: number[]): number {
  const n: number = arr.length;
  let sum: number = 0;

  for (let i = 0; i < n; i++) {
    // Вычисляем, сколько раз каждый элемент встретится в подмассивах
    const contribution = Math.floor(((i + 1) * (n - i) + 1) / 2);
    sum += arr[i] * contribution;
  }

  return sum;
}
