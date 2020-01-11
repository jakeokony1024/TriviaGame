# TriviaGame

Hello, and welcome to my Family Guy trivia game! I wanted to create an advanced trivia game that gives the user each question, one at a time, and gives the user 30 seconds to solve the question.
I also wanted the correct answer to be displayed if the wrong answer is selected, and a counter to hold all the correct and incorrect answers, as well as, any questions left unanswered. 

My first step is to build the basic html layout, there isnt going to be very much to the HTML page, as we will dynamically add everthing using jquery and javascript. There is a div wrapper containing a header tag and another div sub wrapper and a button with an ID so we can hook into it. 

Second step is to get the start button to disappear when clicked on so that the other elements don't load on top of it, or append over it. 

Third step is to add in the object containing all the questions and in the questions the properties of all the answer choices, the correct answer and the image that will populate when called on. 

Fourth step is to add another object for the game, that holds all the functions neccesary for the game, need a function for countdown, results, correct and incorrect answers, the reset, as well as the clicked on and times up function needed to make the game flow correctly. 

Fifth step is to set the click funtions correctly, and track all the logic, if an answer matches the correct answer it will go to the answered correctly function, if not incorrectly answered function. 