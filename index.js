var readlineSync = require('readline-sync');

var myAge = readlineSync.question('');

 var name = readlineSync.question('May I have your name? '+"\n");
 console.log('Hi ' + name + ' ! Welcome to my Quiz !!');
 console.log('Lets start the quiz...'+"\n");

var score = 0;
var highScores = [
  {
    name: "Bhavika",
    score: 3
  },

  {
    name: "Mona",
    score: 3
  },
]

var questions = 
[
  {
  question: `What will be the output of the below code ?
  console.log( typeof( '5' + 5))
  `,
  answer: "string"
  }, 
  {
  question: `What will be the output of the following JavaScript code? 
  int x=0;
  for(x;x<10;x++);
  console.log(x);
  `,
  answer: "10"
  },
  {
  question: `The fetch() method returns a ?
  `,
  answer: "promise"
  }
];



function play(question, answer,i) {
  var userAnswer = readlineSync.question((i+1)+" "+question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) 
  { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!"+"\n"+"The answer is: " + answer);
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++ ) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer, i)
    //calling function play reccursively till the loop ends
  }
}
function showScore(){
console.log("You Scored: ", score +"/3");
if (score===3){
highScores.push({name,score})
}
console.log("Highest scorers :")
highScores.map(score => console.log(score.name, " : ", score.score));
}

game();
showScore();
