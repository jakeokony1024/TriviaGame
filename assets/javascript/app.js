$("#start").on("click", function () {
    $("#start").remove();
    game.loadQuestion();


});

$(document).on('click', '.answer-button', function (e) {
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
    unAnswered: 0,
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
        clearInterval(timer);
        $("#subWrapper").html("<h2> Oh, too bad, out of time! </h2>");
        $("#subWrapper").append("<h2> The correct answer was: " + questions[game.currentQuestion].correctAnswer + "</h2>");
        $("#subWrapper").append("<img src=./assets/images/" + questions[game.currentQuestion].image + ">");

    },
    results: function () {
        clearInterval(timer);
        $('#subWrapper').html("<h2> All Finished </h2>");
        $('#subWrapper').append("<h3> Answered Correctly: " +game.correct+ "</h3>");
        $('#subWrapper').append("<h3> Answered Incorrectly: " +game.incorrect+ "</h3>");
        $('#subWrapper').append("<h3> Unanswered: " +game.unAnswered+ "</h3>");





    },
    clickedOn: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    },
    answeredCorrectly: function () {
        console.log("You did It")
        clearInterval(timer);
        game.correct++;
        $("#subWrapper").html("<h2> You got it right! Freakin' sweet! </h2>");
        $("#image").append("<img src=./assets/images/stewie.jpg" + questions[game.currentQuestion].image + ">");

        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }


    },
    answeredIncorrectly: function () {
        console.log("Wrong!")
        clearInterval(timer);
        game.incorrect++;
        $("#subWrapper").html("<h2> Blast! You failed! </h2>");
        $("#subWrapper").append("<h2> The correct answer was: " + questions[game.currentQuestion].correctAnswer + "</h2>");
        $("#image").append("<img src=./assets/images/" + questions[game.currentQuestion].image + ">");
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct = 0;
        game.incorrect = 0;
        game.unAnswered = 0;

    }
}