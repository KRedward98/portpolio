function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "TimeBar"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("TimeBar").style.color = "white";
}

updateClock();
setInterval(updateClock, 1000);

const icons = ["Phone", "Skills", "Folder", "Message"];
const container = document.getElementById("lowerContainer");
const body = document.getElementById("body");

icons.forEach((icon) => {
  const div = document.createElement("div");

  div.classList.add("iconContainer");
  div.style.backgroundImage = `url(./images/${icon}.png)`;
  div.style.backgroundSize = "cover";

  container.appendChild(div);

  const mainDiv = document.getElementById(`${icon}Container`);

  mainDiv.style.visibility = "hidden";

  div.addEventListener("click", () => {
    if (mainDiv.style.visibility === "hidden") {
      mainDiv.style.visibility = "visible";
    } else {
      mainDiv.style.visibility = "hidden";
    }
  });

  body.appendChild(mainDiv);
});

const returnbtns = document.querySelectorAll(".return");
const contentPages = document.querySelectorAll(".contentPages");

returnbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    contentPages.forEach((page) => {
      page.style.visibility = "hidden";
    });
  });
});

const message =
  "Hello, my name is Edward.\nI am a proactive and creative web developer!";
const container2 = document.getElementById("text-container");

// 각 글자를 span으로 감싸기
message.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.classList.add("char");
  container2.appendChild(span);
});

// 한 글자씩 나타나게 만들기
const chars = document.querySelectorAll(".char");
chars.forEach((char, i) => {
  setTimeout(() => {
    char.classList.add("visible");
  }, i * 50); // 속도 조절 가능
});
