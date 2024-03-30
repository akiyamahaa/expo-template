export function getRandomArray(arr: any[], numberOfElements: number) {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfElements);
}