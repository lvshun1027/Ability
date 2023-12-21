/**
 * 过滤非法值 
 * @param value 数组中的某个元素
 * @returns number
 */
function getValue(value: number | null | undefined | ''): number {
  if (value === null || value === undefined || value === '') {
    return 0;
  }
  return value;
}

export default getValue;