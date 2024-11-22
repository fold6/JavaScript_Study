export const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [...array]; //배열을 왼쪽으로 전달
  return deepCopied.sort(); // 정렬된 값 리턴
};
