var teacher = 'Priyanshu'; // treats as a target

function fun() {
  console.log(teacherAssistant);
  var teacher = 'Vikas';
  teacherSubject = 'English';
  var teacherAssistant = 'Rahul';
  console.log(teacher); // treats as a source
  console.log(teacherSubject); // auto-globals happened here
}

fun();
console.log(teacher);
console.log(teacherSubject);
