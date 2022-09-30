export const formatCaption = (caption) => {
  const cleanedUp = caption.split('/').map((word) => {
    if (word.includes('<p>')) {
      return word.replace('<p>', '').trim();
    }

    if (word.includes('<')) {
      return word.replace('<', '').trim();
    }

    return word.trim();
  });
  cleanedUp.pop();

  return {
    title: cleanedUp[0],
    caption: cleanedUp[1],
    cta: cleanedUp[2],
    moreInfo: cleanedUp[3] ? cleanedUp[3] : null,
  }
};
