function countVowels(word) {
    // 0. set a vowelcounter variable
    let counter = 0;
    vowels = ["a", "e", "i", "o", "u"];
    // 1. iterate the input word
    for (let i = 0; i < word.length; i++){
        let letter = word[i];

        for (let j = 0; j < vowels.length; j++){
            let vowel = vowels[j]
            if (letter == vowel){
                counter ++;
            }
        }

    }
    return counter;// 2. check if current letter is a vowel
    // 3. increment the vowelcounter variable if current letter is a vowel
  };

  function main(){
    const words = ["bootcamp", "apple", "pizza", "bear", "juice"];
    let word="";
    for (let i = 0; i < words.length; i++){
        word += words[i];

    }
    console.log(countVowels(word));
  }

  main();
//   console.log(countVowels("bootcamp")); // => 3
//   console.log(countVowels("apple")); // => 2
//   console.log(countVowels("pizza")); // => 2
