function minCapability(nums: number[], k: number): number {
    let min = Math.min(...nums)
    let max = Math.max(...nums)

    const canRob = (capability: number): boolean => {
        let count = 0;
        for(let i = 0; i<nums.length; i++){
            if(nums[i]<=capability){
                count++
                i++
            }
        }
        return count >= k

    }
    while(min<max){
        const mid = Math.floor((min+max)/2);
        if(canRob(mid)){
            max = mid
        }else{
            min = mid+1
        }
    }
    return min
};