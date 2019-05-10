'use strict';
$(document).ready(function(){
    var counter=15;
    var timer;
    var questionBank =[];
    var questionIndex=0;

   function loaddata(){
       $.get("quizdata.json",{username:"username",password:"password"},function(data){
            data =JSON.parse(data);
            questionBank = data;
            question(questionBank);
       });
   }

   function question(){
        questionIndex = Math.floor(Math.random() *10);
        console.log(questionBank[questionIndex].question);
        $("#question").text(questionBank[questionIndex].question);  
        timer = setInterval(startTimer,1000);    
   }

   function startTimer(){
       if(counter !=0){
           $("#timer").text(counter);
           counter =counter-1;
       }
       else if(counter ==0){
           alert("time out");
           clearInterval(timer);
       }
   }

//    function answerSubmitted(){
//     var answer= $("#input").val();
//     if(questionBank[questionIndex].answer == answer){
//       alert("correct answer");
//   }
//     else {
//       alert("wrong answer");
//   }
//    }
   
   var answer= $("#input").val();
   $("#button").click(function(){
    if(questionBank[questionIndex].answer == answer){
      alert("correct answer"); 
  }
    else {
      alert("wrong answer");
  }
   });



loaddata();
})
