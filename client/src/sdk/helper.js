export const append = (arr, id) => {
  const normalized = String(id);

  if (Array.isArray(arr)) {
    return arr.indexOf(normalized) === -1 ? arr.concat(normalized) : arr;
  }
  return [normalized];
};
