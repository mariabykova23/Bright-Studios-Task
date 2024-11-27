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
  
    // Зміна хедерів і футерів
    function toggleHeadersAndFooters() {
      // Сховати поточні
      header1.classList.add("hidden-fade");
      footer1.classList.add("hidden-fade");
  
      setTimeout(function () {
        header1.classList.add("hidden");
        footer1.classList.add("hidden");
  
        // Показати нові
        header2.classList.remove("hidden");
        header2.classList.remove("hidden-fade");
        footer2.classList.remove("hidden");
        footer2.classList.remove("hidden-fade");
  
        header2.style.opacity = "1";
        footer2.style.opacity = "1";
      }, 1000);
    }
  
    // Скидання таймера
    function resetTimer() {
      countdown = 90; // Скинути час
      timerDisplay.textContent = countdown;
      startTimer(); // Запустити таймер знову
    }
  
    // Автоматичний запуск при завантаженні сторінки
    startTimer();
  });
  