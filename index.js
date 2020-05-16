const STORE =[
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'What Inspire Frank Herbert to set the desert as a setting of his story',
    answers: [
        'A) A trip to Oregon',
        'B) trip to the Sahara Desert',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

},
{
    questions: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books',

}

];

let score = 0;
let questionNumber = 0;

function startQuiz(){
   $('#startBtn').on('click', function(event){
       $('.altBox').hide();
       $('.start-quiz').hide();
       $('.questionBox').show();
       $('.questionBox').prepend(renderAQuestion());
       $('.questionNumber').text(1);
   });
}



function renderAQuestion(){
    

}


function submitAnswer(){
    
}

function nextQuestion(){
    
}


function restartQuiz(){
   
}






function handleQuizClicks(){
    startQuiz();
    renderAQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
    }


$(handleQuizClicks());