function check()
{   let yes = 0;
    let no = 0;
    let otvet = "";
    let choice;
    for (let v=1; v<=9; v++)
    {
        const q = document.getElementsByName('answer'+v)
        q.forEach(element => {
            if (element.checked) {
                choice = element.value;
            }
        });
        if (choice=="yes") {yes++;}
        if (choice=="no") {no++;}
    }
    switch (true)
    {
        case (yes<4): otvet ="Your knowledge is not enough";break;
        case (yes==6): otvet ="Intermediate level of knowledge";break;
        case (yes>8): otvet ="Great job!You passed the test!";break;
        default: otvet ="Very Bad";break;
    }
    document.getElementById('Result').parentElement.insertAdjacentHTML('afterend',
        `<footer class="footer hero is-warning">
            <div class="content has-text-centered">
        <p>
      <strong>${otvet}</strong> 
        </p>
        </div>
    </footer>`);
}
