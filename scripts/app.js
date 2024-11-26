
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let academyEmail = document.getElementById('academyEmail');
let email = document.getElementById('email');
let randomizeBtn = document.getElementById('randomizeBtn');

let studentHistory = document.getElementById('studentHistory');
let history = [];


function getStudentData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data.students;
    });
};

getStudentData();

function getRandomStudent(students){
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log(randomIndex);
    getStudentHistory(randomIndex, students);
    return students[randomIndex];

};

function getStudentHistory(randomIndex, students){
    history.push(students[randomIndex].firstName);
    
    if(history.length > 5){
        history.shift();
    }
    console.log(history);

};

randomizeBtn.addEventListener('click', () => {
    // alert("Button is Working!");
    getStudentData().then(students => {
        let randomStudent = getRandomStudent(students);
        console.log(randomStudent);
        
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        academyEmail.innerText = randomStudent.academyEmail;
        email.innerText = randomStudent.email;

        studentHistory.innerText = history.join(', ');
    });

});