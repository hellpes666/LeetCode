function average(salary: number[]): number {
    if (salary.length < 3) return 0;
    
    let min = salary[0]!;
    let max = salary[0]!;
    let sum = 0;
    
    for (let num of salary) {
        min = Math.min(min, num);
        max = Math.max(max, num);
        sum += num;
    }
    
    return (sum - min - max) / (salary.length - 2);
};
