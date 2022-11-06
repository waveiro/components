function removeDuplicates(str) {
  const wordsArray = str.split(" ");
  const uniqueWordsSet = new Set(wordsArray);

  return Array.from(uniqueWordsSet).join(" ");
}

console.log(removeDuplicates("willian willian arsenio de de sousa"));
