$("#start").on("click", function () {
    $("#start").remove();
    console.log(questions)

});

var questions = [{
    question: "What year did the first episode air? ",
    answers: ["1998", "2004", "2002", "1999"],
    correctAnswer:"1999",
    image: "./assets/images/FG-firstepisode.jpg"
}, {
    question: "What is the name of the baby on the show? ",
    answers: ["Chris", "Stewie", "Meg", "Brian"],
    correctAnswer:"Stewie",
    image: "./assets/images/stewie.jpg"
}, {
    question: "How many emmy awards has Family Guy won?",
    answers: ["None", "Seven", "Nine", "Three"],
    correctAnswer:"Nine",
    image:"./assets/images/emmy-award.jpg"
}, {
    question: "What is the character name of the mayor on the show?",
    answers: ["Adam West", "Greased-up Deaf Guy", "Carter Pewterschmidt", "Joe Swanson"],
    correctAnswer:"Adam West",
    image: "./assets/images/adam-west.jpg"
}, {
    question: "What is the name of the dad on the show?",
    answers: ["Clevland", "Quagmire", "Peter", "Mort"],
    correctAnswer:"Peter",
    image: "./assets/images/peter.gif"
}, {
    question: "Who is the creator of Family Guy",
    answers: ["David Zuckerman", "Alex Borstein", "Seth MacFarlane", "Seth Green"],
    correctAnswer:"Seth MacFarlane",
    image: "./assets/images/seth-macfarlane-medium.jpg"

}]; 

var game = {
    questions1: questions, 
    currentQuestion: 0,
    counter:30,
    correct:0,
    incorrect:0,
    countdown: function(){

    },
    loadQuestion: function(){

    },
    nextQuestion: function(){

    },
    timesUp: function(){

    },
    results: function(){

    },
    clickedOn: function(){

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){

    }
}