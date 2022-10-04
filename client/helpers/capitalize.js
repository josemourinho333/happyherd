export const capitalize = (word) => {
  const array = word.split('');
  const firstLetter = array.shift().toUpperCase();

  return [...firstLetter, ...array].join('');
};