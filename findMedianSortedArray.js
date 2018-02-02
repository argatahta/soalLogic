
var bubbleSort = (arr) => {

    let swap;
    do {
        swap = false;
        for (let i = 0; i < arr.length-1 ; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
            console.log(arr);
        }

    } while (swap);
    return(arr)
}


var findMedianSortedArrays = (nums1, nums2) => {
    let numsJoin = nums1.concat(nums2)
    console.log(numsJoin)
    bubbleSort(numsJoin);
    console.log(numsJoin)

    let numsLen = numsJoin.length
    let midIndex = Math.ceil(numsLen / 2) - 1
    let median = 0

    if (numsLen % 2 == 0) {
        median = (numsJoin[midIndex] + numsJoin[midIndex + 1]) / 2
        return median
    } else {
        median = numsJoin[midIndex]
        return median
    }
}

console.log(findMedianSortedArrays([1, 3], [5, 2]))
