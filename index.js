

var readlineSync = require("readline-sync");

  
score = 0
//input

var username = readlineSync.question("Hi ! What's your name ? ");
console.log("Welcome " + username + ", Let's check how much do you know about Baesil.");

// function 

function play (question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase === answer.toUpperCase) {
    console.log ("Your are right!")
    score = score+1
  }else{
    console.log("you are wrong")
  }
  console.log("Your score is "+score)  
}

//array of objects

var questions = [{
  question : "What's my fav superhero ? ",
  answer : "Batman"
},
{
  question : "What's my fav food ? ",
  answer : "Parotta"
},
{
  question : "What's my fav colour ? ",
  answer : "Black"
}]

for (var i = 0;i<questions.length;i++) {
  var currentQue = questions[i];
  play(currentQue.question,currentQue.answer)
}

console.log("Thanks for participating ! Your final score is "+score)  






