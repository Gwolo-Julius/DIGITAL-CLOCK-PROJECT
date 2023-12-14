//IIFE

(() => {
  "use strict";

  const mainScreen = document.querySelector(".main_screen");
  const amPmScreen = document.querySelector(".am_pm");
  const dateScreen = document.querySelector(".date");
  const lightBtn = document.querySelector(".light_btn");
  const lightText = document.querySelector("h1");

  const hourDigit = document.querySelector(".hour_digit");
  const minuteDigit = document.querySelector(".minute_digit");
  const secondDigit = document.querySelector(".second_digit");

  const amPmElement = document.querySelector(".am_pm_digit");
  const monthElement = document.querySelector(".mm");
  const dateElement = document.querySelector(".dd");
  const yearElement = document.querySelector(".yyyy");
  const greetings = document.querySelector("p");

  const updateDate = () => {
    const currentDate = new Date();

    setTimeout(updateDate, 1000);

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    hourDigit.innerHTML = hour;
    minuteDigit.innerHTML = minute;
    secondDigit.innerHTML = second;

    dateElement.innerHTML = date;
    monthElement.innerHTML = month + 1;
    yearElement.innerHTML = year;

    if (second < 10) {
      secondDigit.innerHTML = `0${second}`;
    }

    if (minute < 10) {
      minuteDigit.innerHTML = `0${minute}`;
    }
    if (hour < 10) {
      hourDigit.innerHTML = `0${hour}`;
    }

    if (hour < 12) {
      greetings.innerHTML = "Good Morning";
    } else if (hour > 11 && hour < 16) {
      greetings.innerHTML = "Good Afternoon";
    } else if (hour > 15 && hour < 20) {
      greetings.innerHTML = "Good Evening";
    } else if (hour > 20 && hour < 2) {
      greetings.innerHTML = "Good Night";
    } else {
      greetings.innerHTML = "Enjoy your Sleep";
    }

    if (hour < 12) {
      amPmElement.innerHTML = "am";
    } else {
      amPmElement.innerHTML = "pm";
    }
  };
  updateDate();

  const lightOn = () => {
    mainScreen.classList.add("light_on");
    amPmScreen.classList.add("light_on");
    dateScreen.classList.add("light_on");
    lightText.style.color = "#00df00";
  };
  const lightOff = () => {
    mainScreen.classList.remove("light_on");
    amPmScreen.classList.remove("light_on");
    dateScreen.classList.remove("light_on");
    lightText.style.color = "";
  };
  lightBtn.addEventListener("mouseover", lightOn);
  lightBtn.addEventListener("mouseout", lightOff);
})();
