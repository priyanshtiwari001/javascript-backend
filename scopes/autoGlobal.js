var teacher = "sanket";

function fun() {
  var teacher = "punkit";
  console.log(teacher, teachingAssistant); // here teachingAssistant is undeclared as we never formally declared the variable
  teachingAssistant = "Vaibhav";
}

function gun() {
  console.log(subject, typeof subject); // here subject is undefined as we declared formally
  var subject = "JS";
  console.log(teacher);
}

gun();
console.log(teacher);
