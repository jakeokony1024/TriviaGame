$("#start").on("click", function () {
    $("#start").remove();
    game.loadQuestion();

});

$(document).on('click', function(e){
    game.clickedOn(e);
});

var questions = [{
    question: "What year did the first Family Guy episode air? ",
    answers: ["1998", "2004", "2002", "1999"],
    correctAnswer: "1999",
    image: "./assets/images/FG-firstepisode.jpg"
}, {
    question: "What is the name of the baby on the show? ",
    answers: ["Chris", "Stewie", "Meg", "Brian"],
    correctAnswer: "Stewie",
    image: "./assets/images/stewie.jpg"
}, {
    question: "How many emmy awards has Family Guy won?",
    answers: ["None", "Seven", "Nine", "Three"],
    correctAnswer: "Nine",
    image: "./assets/images/emmy-award.jpg"
}, {
    question: "What is the character name of the mayor on the show?",
    answers: ["Adam West", "Greased-up Deaf Guy", "Carter Pewterschmidt", "Joe Swanson"],
    correctAnswer: "Adam West",
    image: "./assets/images/adam-west.jpg"
}, {
    question: "What is the name of the dad on the show?",
    answers: ["Clevland", "Quagmire", "Peter", "Mort"],
    correctAnswer: "Peter",
    image: "./assets/images/peter.gif"
}, {
    question: "Who is the creator of Family Guy",
    answers: ["David Zuckerman", "Alex Borstein", "Seth MacFarlane", "Seth Green"],
    correctAnswer: "Seth MacFarlane",
    image: "./assets/images/seth-macfarlane-medium.jpg"

}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("TIMES UP");
            game.timesUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subWrapper').html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
        var a = $("<button>");
        
        a.addClass("answer-button");
        
        a.attr("data-name", questions[game.currentQuestion].answers[i]);
        
        a.text(questions[game.currentQuestion].answers[i]);
        
        $("#subWrapper").append(a);
    }


    },
    nextQuestion: function () {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timesUp: function () {

    },
    results: function () {

    },
    clickedOn: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name")== questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        }
        else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function () {
       
    },
    answeredIncorrectly: function () {
        
    },
    reset: function () {
        
    }
}