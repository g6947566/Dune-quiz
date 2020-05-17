const STORE =[
{
    question: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: 'What Inspire Frank Herbert to set the desert as a setting of his story',
    answers: [
        'A) A trip to Oregon',
        'B) trip to the Sahara Desert',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) A trip to Oregon'

},
{
    question: '3Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: '4Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: '5Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: 'Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty Associates',
        'D) Penguin Random House',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

}

];

let score = 0;
let questionNumber = 0;


function updateScore(){
    score++;
    $('.score').text(score);
  }
  function updateQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
  }





function startQuiz(){
    $('.altBox').hide();
   $('.startQuiz').on('click', '.startBtn', function(event){
       $('.startQuiz').hide();
       $('.questionNumber').text(1);
       $('.questionBox').show();
       $('.questionBox').prepend(renderAQuestion()); 
   });
}

function createHTML(questionIndex) {
    let formMaker = $(`<form>
      <fieldset>
        <legend class="questionText">${STORE[questionIndex].question}</legend>
      </fieldset>
    </form>`)
  
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
    if(questionNumber < STORE.length){
        return createHTML(questionNumber);
    }else{
        $('.questionBox').hide();
         finalScore();
         $('.questionNumber').text(10);    
    }

}




function submitAnswer() {
    $('.duneContainer').on('submit', function (event) {
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
  
  function correctAnswer() {
    $('.response').html(
      `<h3>Your answer is correct!</h3>
      
        <p class="sizeMe">Frank Herbert is Proud</p>
        <button type="button" class="nextButton button">Next</button>`
    );
    updateScore();
  }
  

  function wrongAnswer() {
    $('.response').html(
      `<h3>That's the wrong answer...</h3>
      <p class="sizeMe">Frank Herbert is Sad</p>
      <p class="sizeMe">${STORE[questionNumber].correctAnswer}</p>
      <button type="button" class="nextButton button">Next</button>`
    );
  }
  

function nextQuestion(){
        $('.duneContainer').on('click', '.nextButton', function (event) {
          $('.altBox').hide();
          $('.questionBox').show();
          updateQuestionNumber();
          $('.questionBox form').replaceWith(renderAQuestion());
        });         
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


$(handleQuizClicks);