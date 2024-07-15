export function solution(input: string): string {
  const [a, b] = input.split(' ').map((el) => parseInt(el, 10));
  return (a - b).toString();
}
