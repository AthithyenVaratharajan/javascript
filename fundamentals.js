let dogs = ['kanni', 'komban', 'sippipaarai','alangu'];

for ( let i = 0 ; i < dogs.length; i++){
  let dog1 = dogs[i];
  for ( let j = i + 1; j < dogs.length; j++){
    let dog2 = dogs[j]
    console.log(dog1, dog2);
  }
}


let num = [2, 5, 7, 13];
let target = 12;

for ( let i = 0 ; i < num.length; i++){
  let first = num[i];
  for ( let j = i + 1; j < num.length; j++){
    let second = num[j]
    if (first + second === target){
        console.log([i,j]);
    }

  }
}
