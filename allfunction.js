let re =document.querySelector('.restart');

function clickkk(){
 window.location.href="firstpage.html";
}


function firstpage(){
    window.location.href="question.html";
}

re.addEventListener('click',restart);
function restart(){
   console.log('restart worked');
   window.location.href="level2.html";
}
function leadtolevel2(){
    window.location.href="introductionlevel2.html";
}
function gotolevel2(){
    window.location.href="level2.html";
}
function backtolevel1(){
    window.location.href="question.html";
}
function trophy1(){

    window.location.href="trophy1.html";
}

