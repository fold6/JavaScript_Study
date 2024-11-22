//인덱스 제약 조건
//가끔 객체의 일정 속성들만 추려서 좀 더 단순한 객체를 만들어할때가 있다
//pick함수는 네개의 속성을 가징 obj객체에서 name과 age 두속성만 추출해 간단한 형태로 만들려고 함

export const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys
    .map((key) => ({ [key]: obj[key] }))
    .reduce((result, value) => ({ ...result, ...value }), {});
