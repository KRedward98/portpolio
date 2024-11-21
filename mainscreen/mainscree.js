const mainContainer = $("#mainContainer")[0];
const topBar = $("#topBar")[0];
const body = $("body")[0];
const upperHoverContainer = $("#upperHoverContainer")[0];
const underBar = $("#underBar")[0];
const underBarNav = $("#underBarNav")[0];
const finderContainer = $("#finderContatiner")[0];
const finderUpper = $("#finderUpper")[0];
const finderLower = $("#finderLower")[0];
let isFinderOn = false;

const underBarApp = ["LaunchPadIcon", "Finder", "Trash"];

function underBarNavAdd() {
  for (let app of underBarApp) {
    let newBarApp = $("<li>", { id: app });
    newBarApp.css({
      backgroundImage: `url(./icons/${app}.png)`,
    });
    $("#underBarNav").append(newBarApp);
  }

  $("#LaunchPadIcon").click(finderAppear);
}

underBarNavAdd();

function underBarReset() {
  while (underBarNav.firstChild) {
    underBarNav.removeChild(underBarNav.firstChild);
  }
}

function underBarCal() {
  let underBarAppLength = underBarNav.children.length;
  underBar.style.width = `${underBarAppLength * 75}px`;
}

underBarCal();

function finderOn() {
  $("#finderContatiner").css({
    visibility: "visible",
    opacity: "1",
  });
  $("#topBar").css({
    visibility: "hidden",
    opacity: "0",
  });

  isFinderOn = true;
  $(".appDiv").css({
    visibility: "hidden",
    opacity: "0",
  });

  return isFinderOn;
}

function finderOff() {
  $("#finderContatiner").css({
    visibility: "hidden",
    opacity: "0",
  });
  $("#topBar").css({
    visibility: "visible",
    opacity: "1",
  });

  isFinderOn = false;

  return isFinderOn;
}

function finderAppear() {
  if (!isFinderOn) {
    finderOn();
  } else {
    finderOff();
  }
}

const myAppList = [
  "Memo",
  "Weather",
  "Calender",
  "Setting",
  "Music",
  "Calculator",
  "Clock",
  "Message",
  "Gamer",
  "Safari",
  "Piano",
];
function addYourApp() {
  for (let myApp of myAppList) {
    let newAppBox = $("<div>", {
      id: myApp,
      class: "appBox",
    });

    let newAppImage = $("<div>", {
      class: "appImage",
      css: {
        backgroundImage: `url(./icons/${myApp}.png)`,
      },
    });

    let newAppName = $("<div>", {
      class: "appName",
      text: myApp,
    });

    newAppBox.append(newAppImage);
    newAppBox.append(newAppName);
    $("#finderLower").append(newAppBox);

    const myAppName = myApp;

    newAppImage.click((event) => {
      let counter = 0;
      finderOff();
      underBarReset();
      for (app of underBarApp) {
        if (app === myAppName) {
          counter++;
          break;
        }
      }
      if (counter < 1) {
        underBarApp.push(myAppName);
      }

      underBarNavAdd();
      underBarCal();

      const newDiv = $("<div>", {
        id: `${myAppName}Div`,
        class: "appDiv",
      }).css({
        width: "600px",
        height: "400px",
        position: "absolute",
        left: "50px",
        top: "50px",
        border: "10px solid blue",
        visibility: "visible",
        opacity: "1",
      });

      $("body").append(newDiv);
    });
  }
}

addYourApp();

function finderLowerHandler() {
  window.addEventListener("keydown", (event) => {
    const guess = event.key;
    if (isFinderOn && guess === "Escape") {
      finderOff();
    }
  });

  document.addEventListener("click", (event) => {
    const targetInfo = event.target;
    if (targetInfo.id === "finderLower" && isFinderOn) {
      finderOff();
    }
  });
}

finderLowerHandler();
