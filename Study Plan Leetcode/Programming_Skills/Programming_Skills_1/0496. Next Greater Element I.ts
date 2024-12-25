function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const stack: number[] = [];
    
    // Проходим по каждому числу в nums2
    for (const num of nums2) {
        // Пока стек не пуст И текущее число больше числа на вершине стека
        while (stack.length && stack[stack.length - 1] < num) {
            // Для числа на вершине стека мы нашли следующее большее число (num)
            map.set(stack.pop()!, num);
        }
        // Добавляем текущее число в стек
        stack.push(num);
    }
    
    // Для оставшихся чисел в стеке нет большего числа справа
    while (stack.length) {
        map.set(stack.pop()!, -1);
    }
    
    // Формируем результат для nums1, используя значения из map
    return nums1.map(num => map.get(num)!);
}