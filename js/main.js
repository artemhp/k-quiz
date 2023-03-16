function check(v) {
    const q = document.getElementsByName('answer' + v);
    let result = null;
    q.forEach(element => {
        if (element.checked) {
            result = element.value;
        }
    });
    return result;
}

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
    if (add_Question) {
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