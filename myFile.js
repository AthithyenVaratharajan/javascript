function array(alphabet){
    console.log(alphabet[2],alphabet[4],alphabet[0],alphabet[18],alphabet[0],alphabet[17] ); // => 3

}

function main(){
    let alphabet = [
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z"
  ];

    array(alphabet);

}

main();

function reverseTheSentence(sentence) {
    if (typeof sentence !== 'string') {
      return null;
    }
    let parts = sentence.split(' ');
    parts.reverse();
    return parts.join(' ');
  }


sentence = "I am going to become a software engineer at google!"

console.log(reverseTheSentence(sentence));

let a = [];
let x = null;

if (a === null) {
  console.log('a is null');
} else if (x === null) {
  console.log('x is null');
}

function returnsWhat() {

  }

console.log(returnsWhat());

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(2, 3);
console.log(arr);


