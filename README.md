# TriviaGame

Hello, and welcome to my Family Guy trivia game! I wanted to create an advanced trivia game that gives the user each question, one at a time, and gives the user 30 seconds to solve the question.
I also wanted the correct answer to be displayed if the wrong answer is selected, and a counter to hold all the correct and incorrect answers, as well as, any questions left unanswered. 

My first step is to build the basic html layout, there isnt going to be very much to the HTML page, as we will dynamically add everthing using jquery and javascript. There is a div wrapper containing a header tag and another div sub wrapper and a button with an ID so we can hook into it. 

Second step is to get the start button to disappear when clicked on so that the other elements don't load on top of it, or append over it. 

Third step is to add in the object containing all the questions and in the questions the properties of all the answer choices, the correct answer and the image that will populate when called on. 

var questions = [{
    question: "What year did the first episode air? ",
    answers: ["1998", "2004", "2002", "1999"],
    correctAnswer:"1999",
    image:
}, {
    question: "What is the name of the baby on the show? ",
    answers: ["Chris", "Stewie", "Meg", "Brian"],
    correctAnswer:"Stewie",
    image:
}, {
    question: "How many emmy awards has Family Guy won?",
    answers: ["None", "Seven", "Nine", "Three"],
    correctAnswer:"Nine",
    image:
}, {
    question: "What is the character name of the mayor on the show?",
    answers: ["Adam West", "Greased-up Deaf Guy", "Carter Pewterschmidt", "Joe Swanson"],
    correctAnswer:"Adam West",
    image:
}, {
    question: "What is the name of the dad on the show?",
    answers: ["Clevland", "Quagmire", "Peter", "Mort"],
    correctAnswer:"Peter",
    image:
}, {
    question: "Who is the creator of Family Guy",
    answers: ["David Zuckerman", "Alex Borstein", "Seth MacFarlane", "Seth Green"],
    correctAnswer:"Seth MacFarlane",
    image:

}];