const STORE =[
{
    question: '1. Dune was first published by which publisher?',
    answers: [
        'A) Chilton Books',
        'B) Analog Magazine',
        'C) Tom Doherty',
        'D) Penguin',
        'E) Macmillan'
      ],
      correctAnswer: 'A) Chilton Books'

},
{
    question: '2. What Inspire Frank Herbert to set the desert as a setting of his story',
    answers: [
        'A) A trip to Oregon',
        'B) A trip to Sahara Desert',
        'C) A trip to Mexico',
        'D) A trip to Florida',
        'E) Macmillan'
      ],
      correctAnswer: 'A) A trip to Oregon'

},
{
    question: '3. Who was the main character?',
    answers: [
        'A) Lady Jessica',
        'B) Alia',
        'C) Paul Atreides',
        'D) Leto Atreides',
        'E) Leto II Atreides'
      ],
      correctAnswer: 'C) Paul Atreides'

},
{
    question: '4. Who was Paul Atreides’s mother',
    answers: [
        'A) Lady Jessica',
        'B) Alia',
        'C) Chani',
        'D) Reverend Mother Ramallo',
        'E) Reverend Mother Mohiam'
      ],
      correctAnswer: 'A) Lady Jessica'

},
{
    question: '5. The name of Paul Atreides’s wife:',
    answers: [
        'A) Margot Fenring',
        'B) Princess Mohiam',
        'C) Chani',
        'D) Princess Irulan',
        'E) Reverend Mother Ramallo '
      ],
      correctAnswer: 'D) Princess Irulan'

},
{
    question: ' 6. The Bene Gesserit litany against fear',
    answers: [
        'A) Fear is temporary...I will see it go',
        'B) Nothing in life is to be feared, it is only to be understood',
        'C) Without darknes snothing comes to birth, as without light nothing flowers',
        'D) Do not be afraid; our fate cannot be taken from us',
        'E) I must not fear. For fear is the mind-killer...I will face my fear..'
      ],
      correctAnswer: 'E) I must not fear. For fear is the mind-killer...I will face my fear..'

},
{
    question: '7. What are the Fremen’s ultimate goal on Dune?',
    answers: [
        'A) To rid of their enemy the Harkonnens',
        'B) To rule Dune',
        'C) To be recognize as a free people',
        'D) To create a green paradise in Dune',
        'E) To escape Dune'
      ],
      correctAnswer: 'D) To create a green paradise in Dune'

},
{
    question: ' 8. The Padishah Emperor Shaddam IV’s prison planet Salusa Secundus is a front for what?',
    answers: [
        'A) A training ground for Sardaukar',
        'B) A secret bunker',
        'C) A storage space for the spice',
        'D) A world of paradise',
        'E) Another Dune'
        
      ],
      correctAnswer: 'A) A training ground for Sardaukar'

},
{
    question: '9. Why are there no futuristic robots in the book Dune?',
    answers: [
        'A) Due to the war with artificial machines, all computers had inspired distrust.',
        'B) Religion forbids them',
        'C) A virus wiped all artificial life',
        'D) People became much more evolved so there was no need for them',
        'E) They had no recent window update'
      ],
      correctAnswer: 'A) Due to the war with artificial machines, all computers had inspired distrust.'

},
{
    question: '10. What is a crysknife made out of?',
    answers: [
        'A) Volcanic rock',
        'B) Human Bones',
        'C) Pearls',
        'D) Gold',
        'E) Tooth of a sandworm'
      ],
      correctAnswer: 'E) Tooth of a sandworm'

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
          <input class="js-radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </label>
        `).appendTo(fieldSelector);
    });
    $(`<div class= "buttonContainer"><button type="submit" class="submitButton button"> Submit</button > </div>`).appendTo(fieldSelector);
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
    $('.duneContainer').on('click', '.restartButton', function (event) {
      event.preventDefault();
      resetStats();
      $('.altBox').hide();
      $('.startQuiz').show();
    });
  }

  function resetStats() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
  }

function correctAnswer(){
    $('.response').html(
      `<h3>Your answer is correct!</h3>
        <p class="sizeMe correctAnswer">Frank Herbert is proud</p>
        <button type="button" class="nextButton button">Next</button>`
    );
    updateScore();
  }
  
function wrongAnswer(){
    $('.response').html(
        `<div class="wrongAn"><h3>Wrong!</h3></div>
          <p class="sizeMe wrongAnswer">Frank Herbert is sad</p>
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
    'Please read Dune Again',
    'Frank Herbert will change your life'
    
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