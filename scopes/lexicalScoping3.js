var teacher = 'Priyanshu'; // treats as a target

function fun() {
  var teacher = 'Vikas';
  teacherSubject = 'English';
  console.log(teacher); // treats as a source
  console.log(teacherSubject); // auto-globals happened here
}

console.log(teacherSubject); // as it is a source . also fun is not called so  we get the error.
fun();
console.log(teacher);
