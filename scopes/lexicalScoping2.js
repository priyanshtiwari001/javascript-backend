"use strict";
var teacher = "Priyanshu"; // treats as a target

function fun() {
  var teacher = "Vikas";
  teacherSubject = "English";
  console.log(teacher); // treats as a source
  console.log(teacherSubject); // auto-globals happened here
}

fun();
console.log(teacher);
console.log(teacherSubject);
