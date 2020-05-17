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



function submitAnswer(){
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


function nextQuestion(){
        $('.duneContainer').on('click', '.nextButton', function (event) {
          $('.altBox').hide();
          $('.questionBox').show();
          updateQuestionNumber();
          $('.questionBox form').replaceWith(renderAQuestion());
        });         
}



function restartQuiz() {
    $('.jungleBox').on('click', '.restartButton', function (event) {
      event.preventDefault();
      resetStats();
      $('.altBox').hide();
      $('.startQuiz').show();
    });
  }

function correctAnswer(){
    $('.response').html(
      `<h3>Your answer is correct!</h3>
        <p class="sizeMe">Frank Herbert is proud</p>
        <button type="button" class="nextButton button">Next</button>`
    );
    updateScore();
  }
function wrongAnswer(){
    $('.response').html(
        `<h3>Your answer is wrong!</h3>
          <p class="sizeMe">Frank Herbert is sad</p>
          <button type="button" class="nextButton button">Next</button>`
      );
    
}

function finalScore() {
  $('.final').show();

  const gradeA = [
    'You sure love Dune!',
    'I bow to your knowledge'
  ];

  const gradeB = [
    'Nice!',
    'Frank Herbert still loves you'
   

  ];

  const gradeC = [
    'Read Dune',
    'Love Dune'
    
  ];

  if (score >= 8) {
    array = gradeA;
  } else if (score < 8 && score >= 5) {
    array = gradeB;
  } else {
    array = gradeC;
  }
  return $('.final').html(
    `<h3>${array[0]}</h3>
    <h3>${array[1]}</h3>
        <h3>Your score is ${score} / 10</h3>
        <button type="submit" class="restartButton button">Restart</button>`
  );
}



function handleQuizClicks(){
    startQuiz();
    renderAQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
    }


$(handleQuizClicks);