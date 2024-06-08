let answer=0;
let score=0;
function wronganswer1 (){
    let option1=document.querySelector(".option--1")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option1.appendChild(a);

    let qo1=document.querySelector("#q01");
    let qo2=document.querySelector("#q02");
    let qo3=document.querySelector("#q03");
    let qo4=document.querySelector("#q04");
    option1.removeChild(qo1);
    option1.removeChild(qo2);
    option1.removeChild(qo3);
    option1.removeChild(qo4);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();
}
function rightanswer1(){
    let option=document.querySelector(".option")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option.appendChild(a);

    let qo1=document.querySelector("#q01");
    let qo2=document.querySelector("#q02");
    let qo3=document.querySelector("#q03");
    let qo4=document.querySelector("#q04");
    option.removeChild(qo1);
    option.removeChild(qo2);
    option.removeChild(qo3);
    option.removeChild(qo4);
    answer++;
    
    score++;
    
    console.log("score",  score);
    console.log("answer",answer);
    result();
}
function wronganswer2 (){
    let option2=document.querySelector(".option--2")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option2.appendChild(a);

    let q11=document.querySelector("#q11");
    let q12=document.querySelector("#q12");
    let q13=document.querySelector("#q13");
    let q14=document.querySelector("#q14");
    option2.removeChild(q11);
    option2.removeChild(q12);
    option2.removeChild(q13);
    option2.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer2 (){
    let option2=document.querySelector(".option--2")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option2.appendChild(a);

    let q11=document.querySelector("#q11");
    let q12=document.querySelector("#q12");
    let q13=document.querySelector("#q13");
    let q14=document.querySelector("#q14");
    option2.removeChild(q11);
    option2.removeChild(q12);
    option2.removeChild(q13);
    option2.removeChild(q14);
    answer++;
   
    score++;
   
    console.log("answes", answer);
    console.log( "score",score);
    result();
}
function wronganswer3 (){
    let option3=document.querySelector(".option--3")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option3.appendChild(a);

    let q21=document.querySelector("#q21");
    let q22=document.querySelector("#q22");
    let q23=document.querySelector("#q23");
    let q24=document.querySelector("#q24");
    option3.removeChild(q21);
    option3.removeChild(q22);
    option3.removeChild(q23);
    option3.removeChild(q24);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer3 (){
    let option3=document.querySelector(".option--3")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option3.appendChild(a);

    let q11=document.querySelector("#q21");
    let q12=document.querySelector("#q22");
    let q13=document.querySelector("#q23");
    let q14=document.querySelector("#q24");
    option3.removeChild(q11);
    option3.removeChild(q12);
    option3.removeChild(q13);
    option3.removeChild(q14);
    answer++;
   
    score++;
   
    console.log("answes", answer);
    console.log( "score",score);
    result();
}
function wronganswer4 (){
    let option4=document.querySelector(".option--4")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option4.appendChild(a);

    let q11=document.querySelector("#q41");
    let q12=document.querySelector("#q42");
    let q13=document.querySelector("#q43");
    let q14=document.querySelector("#q44");
    option4.removeChild(q11);
    option4.removeChild(q12);
    option4.removeChild(q13);
    option4.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer4 (){
    let option4=document.querySelector(".option--4")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option4.appendChild(a);

    let q11=document.querySelector("#q41");
    let q12=document.querySelector("#q42");
    let q13=document.querySelector("#q43");
    let q14=document.querySelector("#q44");
    option4.removeChild(q11);
    option4.removeChild(q12);
    option4.removeChild(q13);
    option4.removeChild(q14);
    answer++;
   
    score++;
   
    
    console.log("answes", answer);
    console.log( "score",score);
    result();
}
function wronganswer5 (){
    let option5=document.querySelector(".option--5")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option5.appendChild(a);

    let q11=document.querySelector("#q51");
    let q12=document.querySelector("#q52");
    let q13=document.querySelector("#q53");
    let q14=document.querySelector("#q54");
    option5.removeChild(q11);
    option5.removeChild(q12);
    option5.removeChild(q13);
    option5.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer5 (){
    let option5=document.querySelector(".option--5")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option5.appendChild(a);

    let q11=document.querySelector("#q51");
    let q12=document.querySelector("#q52");
    let q13=document.querySelector("#q53");
    let q14=document.querySelector("#q54");
    option5.removeChild(q11);
    option5.removeChild(q12);
    option5.removeChild(q13);
    option5.removeChild(q14);
    answer++; 
   
    score++;
    
    
    console.log("answes", answer);
    console.log( "score",score);
    result();
}
function wronganswer6 (){
    let option6=document.querySelector(".option--6")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option6.appendChild(a);

    let q11=document.querySelector("#q61");
    let q12=document.querySelector("#q62");
    let q13=document.querySelector("#q63");
    let q14=document.querySelector("#q64");
    option6.removeChild(q11);
    option6.removeChild(q12);
    option6.removeChild(q13);
    option6.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer6 (){
    let option6=document.querySelector(".option--6")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option6.appendChild(a);

    let q11=document.querySelector("#q61");
    let q12=document.querySelector("#q62");
    let q13=document.querySelector("#q63");
    let q14=document.querySelector("#q64");
    option6.removeChild(q11);
    option6.removeChild(q12);
    option6.removeChild(q13);
    option6.removeChild(q14);
    answer++;
    
    score++;
  
    
    console.log("answes", answer);
    console.log( "score",score);
    result();
}

function wronganswer7 (){
    let option7=document.querySelector(".option--7")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option7.appendChild(a);

    let q11=document.querySelector("#q71");
    let q12=document.querySelector("#q72");
    let q13=document.querySelector("#q73");
    let q14=document.querySelector("#q74");
    option7.removeChild(q11);
    option7.removeChild(q12);
    option7.removeChild(q13);
    option7.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer7 (){
    let option7=document.querySelector(".option--7")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option7.appendChild(a);

    let q11=document.querySelector("#q71");
    let q12=document.querySelector("#q72");
    let q13=document.querySelector("#q73");
    let q14=document.querySelector("#q74");
    option7.removeChild(q11);
    option7.removeChild(q12);
    option7.removeChild(q13);
    option7.removeChild(q14);
    answer++;
    
    score++;
   
    
    console.log("answes", answer);
    console.log( "score",score);
    result();
}
function wronganswer8 (){
    let option8=document.querySelector(".option--8")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option8.appendChild(a);

    let q11=document.querySelector("#q81");
    let q12=document.querySelector("#q82");
    let q13=document.querySelector("#q83");
    let q14=document.querySelector("#q84");
    option8.removeChild(q11);
    option8.removeChild(q12);
    option8.removeChild(q13);
    option8.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer8 (){
    let option8=document.querySelector(".option--8")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option8.appendChild(a);

    let q11=document.querySelector("#q81");
    let q12=document.querySelector("#q82");
    let q13=document.querySelector("#q83");
    let q14=document.querySelector("#q84");
    option8.removeChild(q11);
    option8.removeChild(q12);
    option8.removeChild(q13);
    option8.removeChild(q14);
    answer++;
   
    score++;
    
    
    console.log("answes", answer);
    console.log( "score",score);
    result();
}

function wronganswer9(){
    let option9=document.querySelector(".option--9")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option9.appendChild(a);

    let q11=document.querySelector("#q91");
    let q12=document.querySelector("#q92");
    let q13=document.querySelector("#q93");
    let q14=document.querySelector("#q94");
    option9.removeChild(q11);
    option9.removeChild(q12);
    option9.removeChild(q13);
    option9.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer9 (){
    let option9=document.querySelector(".option--9")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option9.appendChild(a);

    let q11=document.querySelector("#q91");
    let q12=document.querySelector("#q92");
    let q13=document.querySelector("#q93");
    let q14=document.querySelector("#q94");
    option9.removeChild(q11);
    option9.removeChild(q12);
    option9.removeChild(q13);
    option9.removeChild(q14);
    answer++;
   
    score++;

    
    console.log("answes", answer);
    console.log( "score",score);
    result();
}
function wronganswer10(){
    let option10=document.querySelector(".option--10")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option10.appendChild(a);

    let q11=document.querySelector("#q101");
    let q12=document.querySelector("#q102");
    let q13=document.querySelector("#q103");
    let q14=document.querySelector("#q104");
    option9.removeChild(q11);
    option9.removeChild(q12);
    option9.removeChild(q13);
    option9.removeChild(q14);
    answer++;
    console.log("score",  score);
    console.log("answer",answer);
    result();

}
function rightanswer10 (){
    let option10=document.querySelector(".option--10")
    let a=document.createElement("h4");
    a.innerHTML="ANSWERED";
    option10.appendChild(a);

    let q11=document.querySelector("#q101");
    let q12=document.querySelector("#q102");
    let q13=document.querySelector("#q103");
    let q14=document.querySelector("#q104");
    option10.removeChild(q11);
    option10.removeChild(q12);
    option10.removeChild(q13);
    option10.removeChild(q14);
    answer++;
    
    score++;
    
    console.log("answes", answer);
    console.log( "score",score);
    result();
}







function result(){
     if(answer>=10){
         if(score>=7 && score<=10){
                    window.location.href="trophy1.html"
         } else{
            window.location.href="fail1.html";
         }
     } 
}

function correctanswer(event){
             
             if(event=='q01'||event=='q02'||event=='q03'){
                
                 let o1=document.querySelector('.option--1');
                 let correctans=document.createElement('div');
                 correctans.innerHTML='  <button class="correctanswer" id="q04" onclick="rightanswer1();"><p class="correctword">อ๊อฟ</p></button>';
                 o1.appendChild(correctans);
             } else  if
             (event=='q12'||event=='q13'||event=='q14'){
                
                document.querySelector('.option--2').insertAdjacentHTML('beforeend', '<div><button class="correctanswer" id="q11><p class="correctword">วิทยาลัย ดุริยางค์คศิลป์ มหิดล</p></button></div>');

             }

             else  if
             (event=='q21'||event=='q22'||event=='q23'){
                
                document.querySelector('.option--3').insertAdjacentHTML('beforeend', '<div> <button class="correctanswer" id="q24" ><p class="correctword">จูบกันสักครั้ง</p"></button></div>');
                  

             }  else  if
             (event=='q41'||event=='q42'||event=='q44'){
                
                document.querySelector('.option--4').insertAdjacentHTML('beforeend', '<div> <button class="correctanswer" id="q4"><p class="correctword">คิดถึง</p></button> </div>');
                  
                 

             }else if(event=='q51'||event=='q53'||event=='q54'){
                document.querySelector('.option--5').insertAdjacentHTML('beforeend', '<div>  <button class="correctanswer" id="q52" ><p class="correctword">youth expo</p> </button></div>');
                  
             }else if(event=='q61'||event=='q63'||event=='q64'){
                document.querySelector('.option--6').insertAdjacentHTML('beforeend', '<div>  <button class="correctanswer" id="q62" ><p class="correctword">2020</p> </button></div>');
                  
             }else if(event=='q71'||event=='q72'||event=='q73'){
                document.querySelector('.option--7').insertAdjacentHTML('beforeend', '<div>   <button class="correctanswer" id="q74" ><p class="correctword">ชาดำเย็น</p></button></div>');
        
}else if(event=='q81'||event=='q82'||event=='q83'){
    document.querySelector('.option--8').insertAdjacentHTML('beforeend', '<div>   <button class="correctanswer" id="q82" ><p class="correctword">autta</p> </button></div>');

}         else if(event=='q91'||event=='q92'||event=='q94'){
    document.querySelector('.option--9').insertAdjacentHTML('beforeend', '<div>   <button class="correctanswer" id="q93" ><p class="correctword">different age</p> </button></div>');

}              else if(event=='q101'||event=='q102'||event=='q103'){
    document.querySelector('.option--10').insertAdjacentHTML('beforeend', '<div>   <button class="correctanswer" id="q104" ><p class="correctword">วงดนตรีอิสระ</p> </button></div>');

}
}
    
