var name = "priyanshu"; // global var
function greet() {
  console.log("hello " + name);

  function test() {
    console.log("test");
  }
}

function bye() {
  console.log("bye bye !" + name);
}

greet();
bye();
