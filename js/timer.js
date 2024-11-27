document.addEventListener("DOMContentLoaded", function () {
    let countdown = 90; 
    const timerDisplay = document.getElementById("timer");
  
    const header1 = document.getElementById("header1");
    const footer1 = document.getElementById("footer1");
    const header2 = document.getElementById("header2");
    const footer2 = document.getElementById("footer2");
  
    function startTimer() {
      const timerInterval = setInterval(function () {
        countdown--;
        timerDisplay.textContent = countdown;
  
        if (countdown <= 0) {
          clearInterval(timerInterval);
          toggleHeadersAndFooters();
          resetTimer();
        }
      }, 1000);
    }
  
    function toggleHeadersAndFooters() {
      if (!header1.classList.contains("invisible")) {
        header1.classList.add("invisible");
        footer1.classList.add("invisible");
  
        setTimeout(() => {
          header1.classList.add("invisible");
          footer1.classList.add("invisible");
  
          header2.classList.remove("invisible");
          footer2.classList.remove("invisible");
        }, 1000);
      } 
      else {
        header2.classList.add("invisible");
        footer2.classList.add("invisible");
  
        setTimeout(() => {
          header2.classList.add("invisible");
          footer2.classList.add("invisible");
  
          header1.classList.remove("invisible");
          footer1.classList.remove("invisible");
        }, 1000);
      }
    }
  
    function resetTimer() {
      countdown = 90; 
      timerDisplay.textContent = countdown;
      startTimer(); 
    }

    startTimer();
  });
  