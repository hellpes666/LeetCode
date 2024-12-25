function hammingWeight(n: number): number {
    let bits: number = 0;
    while (n > 0){
        bits += n & 1;    // Проверяем последний бит (0 или 1)
        n >>= 1;          // Сдвигаем биты вправо
    }      
    return bits;    
};