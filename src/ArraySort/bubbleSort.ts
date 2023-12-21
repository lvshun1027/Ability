/**
 * 
 * 冒泡排序
 * @param arr 目标数组
 * @param ascending 排序方式，true为升序，false为降序
 * @returns 排序后的数组
 */

function bubbleSort(arr: (number | null | undefined | '')[], ascending = true): (number | null | undefined | '')[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const value1 = arr[j] === null || arr[j] === undefined || arr[j] === '' ? 0 : arr[j] as number;
      const value2 = arr[j + 1] === null || arr[j + 1] === undefined || arr[j + 1] === '' ? 0 : arr[j + 1] as number;

      if ((ascending && value1 > value2) || (!ascending && value1 < value2)) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

export default bubbleSort;
