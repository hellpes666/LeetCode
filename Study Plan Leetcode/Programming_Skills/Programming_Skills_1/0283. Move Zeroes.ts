/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // Указатель для позиции следующего ненулевого элемента
  let nonZeroIndex: number = 0;

  // Перемещаем все ненулевые элементы в начало массива
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Меняем местами текущий элемент с позицией nonZeroIndex
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
}