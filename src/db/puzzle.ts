export const randomPuzzle =
{
  'easy': [
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ],
  'medium':
    [
      [0, 2, 8, 1, 5, 4, 7, 3, 6],
      [0, 6, 5, 2, 7, 8, 4, 1, 3],
      [0, 8, 3, 5, 6, 2, 4, 7, 1],
      [0, 6, 3, 8, 7, 1, 5, 2, 4],
      [0, 8, 1, 5, 3, 4, 6, 7, 2],
      [0, 1, 4, 8, 5, 2, 6, 3, 7],
    ],
  'hard': [
    [0, 5, 2, 3, 8, 4, 1, 7, 9, 10, 6, 11, 12, 13, 14, 15],
    [0, 8, 2, 3, 4, 5, 1, 6, 9, 13, 11, 7, 12, 14, 10, 15],
    [0, 4, 8, 3, 9, 13, 2, 1, 12, 11, 5, 6, 14, 10, 15, 7]
  ]

}

export const modePuzzle = (mode: string) => {
  let n;
  switch (mode) {
    case 'easy': n = 4;
    case 'medium': n = 9;
    case 'hard': n = 16;
    default: n = 4;
  }
  return Array.from({ length: n }, (_, index) => index)
}