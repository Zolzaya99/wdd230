const student1 = {
    name: 'Zolzaya Oyunkhand',
    iNumber: '11-222-3333',
    age: '21'
}

const student2 = {
    name: 'Conner Wadsworth',
    iNumber: '11-222-3333',
    age: '21'
}

// {} curly brackets are dictionary which is called object in javascript. 

const students = [student1, student2];

// [] list is an array in javascript. 

localStorage.setItem('students', JSON.stringify(students));

const newStudents = JSON.parse(localStorage.getItem('students'));



// students.forEach(student => {
//     URL.InnerHTML '<li>'
// }

//     )