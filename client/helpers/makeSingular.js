export const makeSingular = (word) => {
  const toArray = word.split('');
  const lastLetter = toArray.pop();
  
  if (lastLetter === 's') {
    return toArray.join('');
  } else {
    return word;
  }
};