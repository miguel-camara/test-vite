const numbers: number[] = [3, 5, 1, 6, 7, 8, 4, 0, 2];

export function setupResult(element: HTMLButtonElement) {
  const setResult = () => {
    const listNumbers =
      document.querySelector<HTMLInputElement>('#inputNumbers')!;
    const result = document.querySelector<HTMLDivElement>('#show')!;

    const list: number[] = resolver(Number(listNumbers.value));

    result.innerText =
      list.length > 0 ? `Resultado ${list.toString()}` : 'No Existe';
  };
  element.addEventListener('click', () => setResult());
}
const resolver = (n: number): number[] => {
  try {
    const find: number = numbers.findIndex((num: number) => num === n);

    if (find !== -1) {
      const list: number[] = [];
      list.push(numbers[find]);

      for (let i = find + 1; i < numbers.length; i++) {
        if (numbers[i - 1] + 1 === numbers[i]) list.push(numbers[i]);
        else break;
      }

      return list;
    }
  } catch (err) {
    console.log('Error :c');
    return [];
  }

  return [];
};
