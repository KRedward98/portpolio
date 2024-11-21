function timeSettingForm() {
  const clockSetting = new Date();
  const thisHours = clockSetting.getHours().toString().padStart(2, "0");
  const thisMinutes = clockSetting.getMinutes().toString().padStart(2, "0");
  const thisSeconds = clockSetting.getSeconds().toString().padStart(2, "0");
  const thisYear = clockSetting.getFullYear();
  const thisMonth = clockSetting.getMonth(); // 0 ~ 11
  const thisDate = clockSetting.getDate();
  const thisDay = clockSetting.getDay(); // Sun Mon Tue Wed Thu Fri Sat

  // 결과를 객체로 반환
  return {
    clockSetting,
    thisHours,
    thisMinutes,
    thisSeconds,
    thisYear,
    thisMonth,
    thisDate,
    thisDay,
  };
}

function mainClock() {
  const { thisHours, thisMinutes, thisSeconds, thisMonth, thisDate, thisDay } =
    timeSettingForm();
  // 구조분해할당 (destructuring assignment) => 추가로 더 공부하기! | 왜 작동하는지 보기
  const dayBox = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateAndDay = document.getElementById("dateAndDay");
  dateAndDay.innerText = `${dayBox[thisDay]}, ${months[thisMonth]} ${thisDate}`;
  const time = document.getElementById("time");
  const currentTime = `${thisHours} : ${thisMinutes} :${thisSeconds}`;
  time.textContent = currentTime;

  // const timeInfo = timeSettingForm(); /// object result
  // console.log(timeInfo); // timeInfo works
  // localStorage.setItem("timeInfo", JSON.stringify(timeInfo));
}

setInterval(mainClock, 1000);

mainClock();

const mainPassWord = "12345";

const passwordInput = document.getElementById("passwordInput");

passwordInput.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    if (passwordInput.value === mainPassWord) {
      window.location.href = "./mainscreen/index.html";
    } else {
      alert("no");
    }
  }
});
