function arraySign(nums: number[]): number {
    if (!nums.length) return 0;
    
    let negatives: number = 0;
    const lenArray: number = nums.length;
    
    for (let i: number = 0; i < lenArray; i++) {
        if (nums[i] === 0) return 0;
        if (nums[i] < 0) negatives++;
    }
    
    return negatives % 2 === 0 ? 1 : -1;
}   