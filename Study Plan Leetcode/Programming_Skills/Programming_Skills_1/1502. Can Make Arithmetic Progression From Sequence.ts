function canMakeArithmeticProgression(arr: number[]): boolean {
    const n: number = arr.length;
    
    // Проверка на минимальную длину
    if (n < 2) return false;
    
    // Сортировка массива
    arr.sort((a: number, b: number): number => a - b);
    
    // Вычисление разницы между первыми двумя элементами
    const difference: number = arr[1] - arr[0];
    
    // Проверка арифметической прогрессии
    for (let i: number = 2; i < n; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            return false;
        }
    }
    
    return true;
}