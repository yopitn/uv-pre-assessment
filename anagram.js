const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];

const anagram = (words) => {
  let sorted = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordSort = word.split("").sort().join("");

    if (!sorted.includes(wordSort)) {
      sorted.push(wordSort);
    }
  }

  let newArr = [];

  for (let i = 0; i < sorted.length; i++) {
    let anagram = [];

    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      let wordSort = word.split("").sort().join("");

      if (wordSort == sorted[i]) {
        anagram.push(word);
      }
    }

    newArr.push(anagram);
  }

  return newArr;
};

const result = anagram(words);
console.log(result);
