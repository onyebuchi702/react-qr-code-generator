export const greaterThanValue = (value: string | number) => {
  const one = 1;
  const zero = 0;

  if (typeof value === 'string') {
    return value.length >= one;
  }

  if (typeof value === 'number') {
    return value > zero;
  }
};