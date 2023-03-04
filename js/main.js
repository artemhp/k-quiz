function check()
{   var yes =0;
    var no =0;
    var otvet="";
    var choice;
    for (var v=1; v<=9; v++)
    {   var q = document.getElementsByName('answer'+v)
        for (var i=0; i<q.length; i++)
        {
            if (q[i].checked) {
                choice=q[i].value;
            }
        }
        if (choice=="yes") {yes++;}
        if (choice=="no") {no++;}
    }
    switch (true) {
        case (yes<4): otvet="Your knowledge is not enough";break;
        case (yes==6): otvet="Intermediate level of knowledge";break;
        case (yes>8): otvet="Great job!You passed the test!";break;
        default: otvet="Very Bad";break;
    }
    document.getElementById('Result').parentElement.insertAdjacentHTML('afterend', `<footer class="footer hero is-warning">
  <div class="content has-text-centered">
    <p>
      <strong>${otvet}</strong> 
    </p>
  </div>
</footer>`);
}
