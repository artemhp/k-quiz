function  check(v){
    const q = document.getElementsByName('answer'+v);
        q.forEach(element => {
             if (element.checked) {
              return  element.value;
          }
      });
 }
function levelOfConfidence(yes)
{
  let level;
    if(yes < 4)
            {return  level = "Your knowledge is not enough";}

        if (yes === 7)
             { return level = "Intermediate level of knowledge";}

                if (yes > 8)
                { return level = "Great job!You passed the test!";}
}
function  Result(){
    const arr= [1,2,3,4,5,6,7,8,9];
     if(add_Question){
        arr.push('10');
    }
    arr.forEach(el => {
        check(arr[el]);
    })
    const yes = arr.filter(el => el.status = true).length;
    const result = levelOfConfidence(yes);
    document.getElementById('Result').parentElement.insertAdjacentHTML('afterend',
        `<footer class="footer hero is-warning">
            <div class="content has-text-centered">
           <p>
           <strong>${result}</strong>
            </p>
            </div>
     </footer>`);

}
function add_Question(){
let add = document.getElementById('new_question');
    document.getElementById('new_question').parentElement.insertAdjacentHTML(
        'beforebegin',
        `<section class="section">
            <div class="columns">
            <div class="column is-one-third">
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                           ${add.value }
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="answer10" value="yes">
                                        Yes
                                </label>
                                <label class="radio">
                                    <input type="radio" name="answer7" value="no">
                                        No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`);
}

    document.getElementById( 'hider1').onclick = function () {
    document.getElementById('1').hidden = true;
}

