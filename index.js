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

function createHTML(questionIndex){
let formMaker = $(`
<form>
   <fieldset>
       <legend class="question text">
           ${STORE[questionIndex].question}
       </legend>

   </fieldset>
</form>
`)


let fieldSelector = $(formMaker).find('fieldset');
  
STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
  $(`<label class="sizeMe" for="${answerIndex}">
      <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
      <span>${answerValue}</span>
    </label>
    `).appendTo(fieldSelector);
});
$(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
return formMaker;
}


function renderAQuestion(){
    if(questionNumber<STORE.length){
        return createHTML(questionNumber);
    }else{
        $('.questionBox').hide();
         finalScore();
         $('.questionNumber').text(10);    
    }

}



function submitAnswer(){
    $('.duneContainer).on('submit', function (event) {
        event.preventDefault();
        $('.altBox').hide();
        $('.response').show();
        let selected = $('input:checked');
        let answer = selected.val();
        let correct = STORE[questionNumber].correctAnswer;
        if (answer === correct) {
          correctAnswer();
        } else {
          wrongAnswer();
        }
      });
    
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