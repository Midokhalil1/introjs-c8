const students = require ("./students.json")
// disply all the students first names one at a time, one per line.

function showStudents(studentlist) {

    for (let i = 0; i < studentlist.length; i++) {

        const student = studentlist[i]

        console.log(student.firstName)

    }

}
function showStudentGrade(studentlist) {

    for (let i = 0; i < studentlist.length; i++) {

        const student = studentlist[i]

        console.log(student.grade)
    }
}


function showStudentaddress(studentlist) {

    for (let i = 0; i < studentlist.length; i++) {

        const student = studentlist[i]

        console.log(student.address)

    }

}

showStudents(students)
showStudentGrade(students)
showStudentaddress(students)