// 冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。
// 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。
function bubbleSort(arr){
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
// 如何优化一个冒泡排序
// 如果运行到当中某一趟时排序已经完成，或者输入的是一个有序数组，那么后边的比较就都是多余的，
// 为了避免这种情况，我们增加一个flag，判断排序是否在中途就已经完成（也就是判断有无发生元素交换）

function bubbleSort(arr){
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        let flag = true;
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                flag = false;
                let temp = arr[j];
                arr[j] = arr[j +1 ];
                arr[j + 1] = temp
            }
        }
        // 这个flag的含义是：如果`某次循环`中没有交换过元素，那么意味着排序已经完成
        if(flag) break;
    }
    return arr
}
