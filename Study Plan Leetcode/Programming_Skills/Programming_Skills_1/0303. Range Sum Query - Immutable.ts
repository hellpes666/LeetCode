class NumArray {
    private nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        if (left <= right && right <= this.nums.length && this.nums.length >= 1) {
            let totalSum: number = 0;
            for (let i = left; i <= right; i++) {
                totalSum += this.nums[i];
            }

            return totalSum;
        } else {
            throw new Error('Idiot');
        }
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
