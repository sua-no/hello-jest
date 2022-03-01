exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
exports.avg = (numbers) => numbers.reduce((acc, cur, index, { length }) => acc + cur / length, 0);
exports.sort = (numbers) => numbers.sort((a, b) => a - b);
exports.median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(numbers.length / 2);
  return length % 2 ? numbers[middle] : (numbers[middle - 1] + numbers[middle]) / 2;
};
exports.mode = (numbers) => {
  // const counts = new Map();
  // numbers.forEach((n) => {
  //   const count = counts.get(n) || 0;
  //   counts.set(n, count + 1);
  // });
  const counts = numbers.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );

  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter((number) => counts.get(number) === maxCount);
  if (modes.length === numbers.length) return null;
  if (modes.length > 1) return modes;
  return modes[0];
};
