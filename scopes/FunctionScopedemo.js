var name = "priyanshu"; // global var
function greet() {
  console.log("hello " + name);
  var x = 100; // functional scope- can onlye access through outer function
  function test() {
    console.log("test " + x);
  }

  test();
  console.log(x);
}

function bye() {
  console.log("bye bye !" + name);
}

greet();
bye();
