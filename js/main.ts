const questions = [
    {
        question: " Explain how this works in JavaScript. Can you give an example of one of the ways that working with this has changed in ES6?",

    },
    {
        question: " What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?",
    },
    {
        question: " Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?",
    },
    {
        question: " Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
    },
    {
        question: " What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
    },
    {
        question: " What is the difference between while and do-while loops in JavaScript?",
    },
    {
        question: " Can you give an example of a curry function and why this syntax offers an advantage?",
    },
    {
        question: " Discuss how you might use Object Oriented Programming principles when coding with JavaScript.",
    },
    {
        question: " What are the benefits of using spread syntax and how is it different from rest syntax?",
    },
];
const cardsElement = document.getElementById("cards");
let cardsHTML = "";

interface ICard { 
  question: string;
}

function iterateCards(element:ICard, index:number) {
    return `
    <div class="card mt-2 ">
      <div class="card-content">
        <label class="checkbox">
          <input type="checkbox" id="toggle-${index}" onclick="hideDiv('card-${index}')">
          Hide the question
        </label>
        <div class="content" id="card-${index}">
          ${element.question}
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer${index}" value="yes">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="answer${index}" value="no">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  `;
}

function displayCards() {
    let rowHTML = "";
    let cardCount = 0; // Count of cards added to current row
    questions.forEach((element, index) => {
        const cardHTML = iterateCards(element, index + 1);
        if (cardCount === 0) {
            // Start a new row
            rowHTML += '<section class="section"><div class="columns is-block">';
        }
        rowHTML += cardHTML;
        cardCount++;
        if (cardCount === 3 || index === questions.length - 1) {
            // End the row
            rowHTML += '</div></section>';
            cardCount = 0;
        }
    });
    if (cardsElement){
      cardsElement.innerHTML = rowHTML;
    }else {
      console.log("No card container")
    }
    }

function check(v:number) {
    const q = document.getElementsByName('answer' + v) as NodeListOf<HTMLInputElement>;
    let result = null;
    q.forEach(element  => {
        if (element.checked) {
            result = element.value;
        }
    });
    return result;
}

displayCards();
function levelOfConfidence(yes) {
    if (yes < 4) {
        return "Your knowledge is not enough";
    } else if (yes < 7) {
        return "Your knowledge is intermediate";
    } else if (yes < 10) {
        return "Your knowledge is advanced";
    } else {
        return "Great job! You passed the test!";
    }
}

function add_Question() {
    let add = document.getElementById('new_question');
    document.getElementById('new_question').parentElement.insertAdjacentHTML(
        'beforebegin',
        `<section class="section">
      <div class="columns">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-content">
              <div class="content">
                ${add.value}
                <div class="control">
                  <label class="radio">
                    <input type="radio" name="answer10" value="yes">
                    Yes
                  </label>
                  <label class="radio">
                    <input type="radio" name="answer10" value="no">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`
    );
}
function Result() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (document.getElementById('new_question').value) {
        arr.push('10');
    }
    let res = [];
    arr.forEach(el => {
        res.push(check(el));
    });
    const yesIndices = res.reduce((acc, el, index) => {
        if (el === 'yes') {
            acc.push(index);
        }
        return acc;
    }, []);
    const yesVariants = yesIndices.map(index => `Variant ${index + 1}`);
    const result = levelOfConfidence(yesIndices.length);
    document.getElementById('Result').parentElement.insertAdjacentHTML(
        'afterend',
        `<footer class="footer hero is-warning">
      <div class="content has-text-centered">
        <p>
          <strong>${result}</strong>
          <br>
          Variants selected as 'yes': ${yesVariants.join(', ')}
        </p>
      </div>
    </footer>`
    );
}

function hideDiv(divId) {
    let x = document.getElementById(divId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}









