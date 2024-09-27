
function Question06() {

    var enterNum = +prompt('Enter the number of student');
    
    var studentArray = []
    var attendanceArray = []
    
    for (let i = 1; i <= enterNum; i++) {
        var student = prompt(`Enter the ${i} Students name`)
        var Attendance = +prompt(`Enter ${i} students Attendance 0(Absent) 1(Present)`)
        
        if(Attendance === 0){
            attendanceArray.push(student)
        }
        else{
            studentArray.push(student)
        }
    }
    
    alert(`Total Absent Students: ${attendanceArray.length}
        \n Student Name: ${attendanceArray}
         \n Total Present Student: ${studentArray.length}
         \n Student Name: ${studentArray}
         \n Total Student: ${enterNum}`)
    
    console.log(studentArray)
    console.log(attendanceArray)
}


function Question07() {
    var one = 'Which planet is known as the Red Planet?'
    var two = 'In what year did World War II end?'
    var three = 'What is the largest mammal in the world?'
    var four = 'Who wrote the play "Romeo and Juliet"?'
    var five = 'Which element is represented by the symbol "O" in the periodic table?'

    var questionArray = [one, two, three, four, five]

    var answerReveal = ['mars', '1945', 'blue whale', 'william shakespeare', 'oxygen']

    let userAnswer = [];

    for (let i = 0; i <= questionArray.length-1; i++) {
        
        var answer = prompt(questionArray[i]).toLocaleLowerCase()
        userAnswer.push(answer)
    }
        if(userAnswer == answerReveal){
            alert('All your Answer are Correct')
        }
        else(
            alert('You got some Incorrect')
        )

        alert(
            `Answers: ${answerReveal}
            \n Answer you give: ${userAnswer}
            `
        )

}
