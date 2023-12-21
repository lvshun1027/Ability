import getValue from "../.utils/getValue";

/**
 * 选择排序
 * @param arr 需要排序的数组
 * @param ascending 排序方式，true为升序，false为降序
 * @returns 排序后的数组或原数组
 */
function selectionSort(arr: (number | null | undefined | '')[], ascending: boolean = true): (number | null | undefined | '')[] {
  if (!arr?.length){
    return arr;
  }

  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (ascending ? getValue(arr[j]) < getValue(arr[minIndex]) : getValue(arr[j]) > getValue(arr[minIndex])) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

export default selectionSort;
