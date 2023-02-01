
window.onload = function(){
    document.getElementById("data").addEventListener("submit", function() {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let theme = document.getElementById("theme").value;
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("theme", theme);
    });
} 
let user = document.getElementById("dataA")
let age = document.getElementById("dataB")
     if(localStorage.getItem("theme") == "cars"){
        user.innerText = "Your name:"+localStorage.getItem("name");
        age.innerText = "Your age:"+localStorage.getItem("age");
        document.body.classList.toggle("car-theme");
     }
     else if(localStorage.getItem("theme") == "pooh"){
      user.innerText = "Your name:"+localStorage.getItem("name");
        age.innerText = "Your age:"+localStorage.getItem("age");
        document.body.classList.toggle("pooh-theme");

     }
     else if(localStorage.getItem("theme") == "space"){
        document.body.classList.toggle("space-theme");
        user.innerText = "Your name:"+localStorage.getItem("name");
        age.innerText = "Your age:"+localStorage.getItem("age");
     }
     else if(localStorage.getItem("theme") == "dino"){
        document.body.classList.toggle("dino-theme");
        user.innerText = "Your name:"+localStorage.getItem("name");
        age.innerText = "Your age:"+localStorage.getItem("age");
     }
     else{
      user.innerText = "Your name:"+localStorage.getItem("name");
       age.innerText = "Your age:"+localStorage.getItem("age");
     };
 

// number 1
function screening() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"1";
   }
};
//number 2
function screening2() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"2";
   }
};
//number 3
function screening3() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"3";
   }
};
// number 4
function screening4() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"4";
   }
};
// number 5
function screening5() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"5";
   }
};
//number 6
function screening6() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"6";
   }
};
// number 7
function screening7() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
     screen.innerHTML = screen.innerHTML+"7";
   }
};
//number 8
function screening8() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"8";
   }
};
//number 9
function screening9() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ) {
      screen.innerHTML = screen.innerHTML+"9";
   }
};

//zero 

function screening0() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1+"
   ||"2+"
   ||"3+"
   ||"4+"
   ||"5+"
   ||"6+"
   ||"7+"
   ||"8+"
   ||"9+"
   ||"10+"
   ||"1-"
   ||"2-"
   ||"3-"
   ||"4-"
   ||"5-"
   ||"6-"
   ||"7-"
   ||"8-"
   ||"9-"
   ||"10-"
   ||"1>"
   ||"2>"
   ||"3>"
   ||"4>"
   ||"5>"
   ||"6>"
   ||"7>"
   ||"8>"
   ||"9>"
   ||"10>"
   ||"1<"
   ||"2<"
   ||"3<"
   ||"4<"
   ||"5<"
   ||"6<"
   ||"7<"
   ||"8<"
   ||"9<"
   ||"10<"
   ||"1"
   ) {
      screen.innerHTML = screen.innerHTML+"0";
   }
};
// samller
function screeningSmaller() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1"
   ||"2"
   ||"3"
   ||"4"
   ||"5"
   ||"6"
   ||"7"
   ||"8"
   ||"9"
   ||"10"
   ) {
      screen.innerHTML = screen.innerHTML+"<";
   }
};

function screeningBigger() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1"
   ||"2"
   ||"3"
   ||"4"
   ||"5"
   ||"6"
   ||"7"
   ||"8"
   ||"9"
   ||"10"
   ) {
      screen.innerHTML = screen.innerHTML+">";
   }
};
function screeningPlus() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1"
   ||"2"
   ||"3"
   ||"4"
   ||"5"
   ||"6"
   ||"7"
   ||"8"
   ||"9"
   ||"10"
   ) {
      screen.innerHTML = screen.innerHTML+"+";
   }
};
function screeningMinus() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1"
   ||"2"
   ||"3"
   ||"4"
   ||"5"
   ||"6"
   ||"7"
   ||"8"
   ||"9"
   ||"10"
   ) {
      screen.innerHTML = screen.innerHTML+"-";
   }
};

      let firstNum = " "
      let secondNum = " " 




function screeningEqual() {
   let screen = document.getElementById("screen");
   if (screen.innerHTML === "" 
   ||"1"
   ||"2"
   ||"3"
   ||"4"
   ||"5"
   ||"6"
   ||"7"
   ||"8"
   ||"9"
   ||"10"
   ) {
      screen.innerHTML = screen.innerHTML+"=";
      
 
      
   
      

      
      
   }
   };

let pressed = document.querySelector(".buttons")
pressed.addEventListener("click", (e) => {
   if (firstNum === " "){
   firstNum =  Number(e.target.innerText)
   }
   else if (firstNum != " " && secondNum != " "){
      answer = Number(e.target.innerText)
   }
   else{
    secondNum = Number(e.target.innerText)
   };
});
let operator = document.querySelector(".operations")
operator.addEventListener("click", (e) => {
  
   operator = e.target.innerText
});
let score = document.getElementById("score")
   function screeningSubmit(){
      let i = localStorage.getItem("score") 
      let operation = Number(firstNum+secondNum);
      if(operator == "+"){
          operation = Number(firstNum+secondNum);
      }
      else if(operator == "-"){
          operation = Number(firstNum-secondNum);
      }
      else{
         console.log("error")
      }
      if(operator == ">" && firstNum > secondNum 
      ||operator == "<" && firstNum < secondNum){
        i++
        localStorage.setItem("score", i)
        score.innerText = "Yay right ! Your score:"+localStorage.getItem("score")
      }
      else if(operator == "-" && answer === operation
      ||operator == "+" && answer === operation){
         i++
         localStorage.setItem("score", i)
         score.innerText = "Yay right ! Your score:"+ localStorage.getItem("score")
      }
      else {
         score.innerText = "Try again ! Your score:"+localStorage.getItem("score")
      }
   };
  /* if(operator == ">"){
   if(firstNum > secondNum){
      document.write("yay right")
   }
   else if (firstNum < secondNum){
      document.write("sorry")
   }
};
if(operator == "<"){
   if(firstNum < secondNum){
      document.write("yay right")
   }
   else if (firstNum > secondNum){
      document.write("sorry")
   }
};
let operation = Number(firstNum+secondNum);
if(operator == "+"){
   if(answer === operation){
      document.write("<p id=\"jstext\">yay right </p>")
   }
   else{
      document.write("sorry")
   }
};
if(operator == "-"){
   let operation = Number(firstNum-secondNum);
   if(answer === operation){
      document.write("yay right")
   }
   else{
      document.write("sorry")
   }
};
   };






  /* function screeningDelete() {
      let screen = document.getElementById("screen");
      if (screen.innerHTML != "") {
         screen.innerHTML = "";
         firstNum = " ";
         secondNum = " ";
         answer = " ";
         operation = " ";
      }
   };
/*let operator = document.querySelector(".buttons")
operator.addEventListener("click", (e) => {
   operator = e.target.innerText
});
let secondNum = document.querySelector(".buttons")
secondNum.addEventListener("click", (e) => {
   secondNum = e.target.innerText   
});
*/

