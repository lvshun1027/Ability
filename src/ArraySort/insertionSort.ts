import getValue from "../.utils/getValue";

/**
 * 插入排序
 * @param arr 需要排序的数组
 * @param ascending 排序方式，true为升序，false为降序
 * @returns 排序后的数组或原数组
 */

function insertionSort(arr: (number | null | undefined)[], ascending: boolean): (number | null | undefined)[] {
  if (!arr?.length){
    return arr;
  }
  const sortedArr = [...arr]; // Create a copy of the original array

  for (let i = 1; i < sortedArr.length; i++) {
    const current = sortedArr[i];
    let j = i - 1;

    while (j >= 0 && (ascending ? getValue(sortedArr[j]) > getValue(current) : getValue(sortedArr[j]) < getValue(current))) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }

    sortedArr[j + 1] = current;
  }

  return sortedArr;
}

export default insertionSort;
