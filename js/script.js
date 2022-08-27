// BUSINESS Logic

function hideResults() {
  document.getElementById("swift").style.display = "none";
  document.getElementById("javascript").style.display = "none";
  document.getElementById("phyton").style.display = "none";
}

//gather the data
window.onload = function() {
 
  let form = document.querySelector("form");

 const getAnswers = function(event) {

  event.preventDefault();
    const button1 = document.getElementById("option1");
    const button2 = document.getElementById("option2");
    const button3 = document.getElementById("option3");
    const button4 = document.getElementById("option4");
    const button5 = document.getElementById("option5");
    const button6 = document.getElementById("option6");
    const button7 = document.getElementById("option7");
    const button8 = document.getElementById("option8");
    const button9 = document.getElementById("option9");
    const button10 = document.getElementById("option10");
    const button11 = document.getElementById("option11");
    const button12 = document.getElementById("option12");
    const button13 = document.getElementById("option13");
    const button14 = document.getElementById("option14");
    const button15 = document.getElementById("option15");
    const button16 = document.getElementById("option16");
    const button17 = document.getElementById("option17");
    const button18 = document.getElementById("option18");

    //show results
    if (button1.checked) {
      document.getElementById("swift").style.display = "block";
      document.getElementById("phyton").style.display = "none";
      document.getElementById("jav").style.display = "none";      
    }else if (button2.checked) {
      document.getElementById("phyton").style.display = "block";
      document.getElementById("jav").style.display = "none";
      document.getElementById("swift").style.display = "none";
    }else if (button3.checked) {
    document.getElementById("jav").style.display = "block";
    document.getElementById("phyton").style.display = "none";
    document.getElementById("swift").style.display = "none";
  }
  }
  form.addEventListener("submit", getAnswers);
  }
  

 
  


  


