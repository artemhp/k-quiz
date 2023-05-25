var questions = [
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
var cardsElement = document.getElementById("cards");
var cardsHTML = "";
function iterateCards(element, index) {
    return "\n    <div class=\"card mt-2 \">\n      <div class=\"card-content\">\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" id=\"toggle-".concat(index, "\" onclick=\"hideDiv('card-").concat(index, "')\">\n          Hide the question\n        </label>\n        <div class=\"content\" id=\"card-").concat(index, "\">\n          ").concat(element.question, "\n          <div class=\"control\">\n            <label class=\"radio\">\n              <input type=\"radio\" name=\"answer").concat(index, "\" value=\"yes\">\n              Yes\n            </label>\n            <label class=\"radio\">\n              <input type=\"radio\" name=\"answer").concat(index, "\" value=\"no\">\n              No\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n  ");
}
function displayCards() {
    var rowHTML = "";
    var cardCount = 0; // Count of cards added to current row
    questions.forEach(function (element, index) {
        var cardHTML = iterateCards(element, index + 1);
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
    if (cardsElement) {
        cardsElement.innerHTML = rowHTML;
    }
    else {
        console.log("No card container");
    }
}
function check(v) {
    var q = document.getElementsByName('answer' + v);
    var result = '';
    q.forEach(function (element) {
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
    }
    else if (yes < 7) {
        return "Your knowledge is intermediate";
    }
    else if (yes < 10) {
        return "Your knowledge is advanced";
    }
    else {
        return "Great job! You passed the test!";
    }
}
function add_Question() {
    // let add:HTMLInputElement = document.getElementById('new_question') as HTMLInputElement;
    var add;
    add = document.getElementById('new_question');
    if (!add) {
        console.log('No element');
        return;
    }
    var newQuestion = document.getElementById('new_question');
    var isParentExist = newQuestion === null || newQuestion === void 0 ? void 0 : newQuestion.parentElement;
    if (isParentExist) {
        newQuestion.parentElement.insertAdjacentHTML('beforebegin', "<section class=\"section\">\n      <div class=\"columns\">\n        <div class=\"column is-one-third\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <div class=\"content\">\n                ".concat(add.value, "\n                <div class=\"control\">\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer10\" value=\"yes\">\n                    Yes\n                  </label>\n                  <label class=\"radio\">\n                    <input type=\"radio\" name=\"answer10\" value=\"no\">\n                    No\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>"));
    }
    else {
        console.log('!!!');
    }
}
function Result() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (document.getElementById('new_question').value) {
        arr.push(10);
    }
    var res = [];
    arr.forEach(function (el) {
        res.push(check(el));
    });
    var yesIndices = res.reduce(function (acc, el, index) {
        if (el === 'yes') {
            acc.push(index);
        }
        return acc;
    }, []);
    var yesVariants = yesIndices.map(function (index) { return "Variant ".concat(index + 1); });
    var result = levelOfConfidence(yesIndices.length);
    document.getElementById('Result').parentElement.insertAdjacentHTML('afterend', "<footer class=\"footer hero is-warning\">\n      <div class=\"content has-text-centered\">\n        <p>\n          <strong>".concat(result, "</strong>\n          <br>\n          Variants selected as 'yes': ").concat(yesVariants.join(', '), "\n        </p>\n      </div>\n    </footer>"));
}
function hideDiv(divId) {
    var x = document.getElementById(divId);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
