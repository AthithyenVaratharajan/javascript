let dog = {};

dog.name = "Lily";

console.log(dog["name"]);

let manager = {};

manager["salary"] = "$$$";

console.log(manager.salary);





let cat = { name: "Bruno" };

let catName = "name";

console.log(cat["name"]);
console.log(cat.name);

let bear = { growl: "RAWR" };

console.log(bear["age"]); // => ???

let lion = { name: "Simba" };

console.log(lion["color"] === undefined); // => ???

let foobar = function(callback) {
    console.log("foo");
    callback();
    console.log("bar");
  };

  let sayHello = function() {
    console.log("hello");
  };

  foobar(sayHello); // prints
  // foo
  // hello
  // bar
