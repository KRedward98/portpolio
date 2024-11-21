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
  for (app of underBarApp) {
    const newBarApp = document.createElement("li");
    newBarApp.id = app;
    newBarApp.style.backgroundImage = `url(./icons/${app}.png)`;

    underBarNav.appendChild(newBarApp);
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

const topBarleftNavigation = document.getElementById("topBarleftNavigation");
let topBarleftNavigationObject = {
  LOGO: {
    LOGOfirst: ["About this Mac"],
    LOGOsecond: ["System Setting", "App Store"],
    LOGOthird: ["Recent Items"],
    LOGOforth: ["Sleep", "Restart", "Shut Down"],
    LOGOfifth: ["Force Quit"],
    LOGOsixth: ["Lock Screen", "Log Out"],
  },
  Finder: {
    Finderfirst: ["About Finder"],
    Findersecond: ["Settings"],
    Finderthird: ["Empty Trash"],
    Finderforth: ["Services"],
    Finderfifth: ["Hide Finder", "Hide Others", "Show All"],
  },
  File: {
    Finderfirst: ["New Folder Window", "New Folder"],
    Findersecond: ["Get Info", "Rename"],
    Finderthird: ["Share"],
    Finderforth: ["Move to Trash"],
    Finderfifth: ["Find"],
  },
  Edit: {
    Filefirst: ["Undo", "Redo"],
    Filesecond: ["Cut", "Copy", "Paste", "Select All"],
    Filethird: ["Show Clipboard"],
    Fileforth: ["AutoFill", "Start Dictation", "Emoji & Symbols"],
  },
  View: {
    Viewfirst: ["as Icons", "as List", "as Columns", "as Gallery"],
    Viewsecond: ["Use Stacks", "Sort by", "Clean Up Selection", "Clean Up By"],
    Viewthird: ["Show Tab Bar", "Show All Tabs"],
    Viewforth: ["Hide Sidebar", "Hide Preview"],
    Viewfifth: ["Hide Toolbar", "Hide Path Bar", "Hide Status Bar"],
    Viewsixth: ["Customize Toolbar"],
    Viewseventh: ["Show View Options", "Show Preview Options"],
    Vieweighth: ["Enter Full Screen"],
  },
  Go: {
    Gofirst: ["Back", "Forward", "Enclosing Folder"],
    Gosecond: [
      "Recent",
      "Documents",
      "Desktop",
      "Downloads",
      "Home",
      "Computer",
      "AirDrop",
      "Network",
      "iCloud Drive",
      "Shared",
      "Application",
      "Utilities",
    ],
    Gothird: ["Recent Folders"],
    Goforth: ["Go to Folder", "Connect to Server"],
  },
  Window: {
    Windowfirst: [
      "Minimize",
      "Zoom",
      "Move Window to Left Side of Screen",
      "Move Window to Right Side of Screen",
      "Replace Tiled Window",
    ],
    Windowsecond: ["Remove Window from Set"],
    Windowthird: [
      "Move to Built-in Retina Display",
      "Cycle Through Window",
      "Show Progress Window",
    ],
    Windowforth: [
      "Show Previous Tab",
      "Show Next Tab",
      "Move Tab to New Window",
      "Merge All Windows",
    ],
    Windowfifth: ["Bring All to Front"],
  },
  Help: {
    Helpfirst: ["Tips for Your Mac"],
    Helpsecond: ["macOS Help"],
  },
};

let clickCounter = false;

function topBarleftNavigationList() {
  for (const [objectListElement, objectListValue] of Object.entries(
    topBarleftNavigationObject
  )) {
    let newListElement = document.createElement("li");

    newListElement.textContent = objectListElement;

    newListElement.style.padding = "3px 10px 3px 10px";
    newListElement.style.border = "none";

    topBarleftNavigation.appendChild(newListElement);

    newListElement.addEventListener("click", function () {
      if (!clickCounter) {
        upperHoverContainer.innerHTML = "";
        upperHoverContainer.style.display = "block";

        Object.values(objectListValue).forEach((value) => {
          for (singleDiv of value) {
            let finderMenuDiv = document.createElement("div");
            finderMenuDiv.style.border = "1px solid block";
            finderMenuDiv.innerText = singleDiv;
            upperHoverContainer.appendChild(finderMenuDiv);
          }
        });
        clickCounter = true;
      } else {
        upperHoverContainer.style.display = "none";
        clickCounter = false;
      }
    });
  }
}

topBarleftNavigationList();

const topBarRightNavigation = document.getElementById("topBarRightNavigation");
const topBarRightNavTimeSet = document.getElementById("topBarRightNavTimeSet");
function topBarRightNavigationList() {
  const clockSetting = new Date();
  const thisHours = clockSetting.getHours().toString().padStart(2, "0");
  const thisMinutes = clockSetting.getMinutes().toString().padStart(2, "0");
  const thisMonth = clockSetting.getMonth(); // 0 ~ 11
  const thisDate = clockSetting.getDate();
  const thisDay = clockSetting.getDay(); // Sun Mon Tue Wed Thu Fri Sat

  const dayBox = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  topBarRightNavTimeSet.textContent = `${dayBox[thisDay]} ${months[thisMonth]} ${thisDate} ${thisHours}:${thisMinutes}`;
}

setInterval(topBarRightNavigationList, 1000);

topBarRightNavigationList();

const myAppList = [
  "Memo",
  "Weather",
  "Calender",
  "Setting",
  "Music",
  "Caculator",
  "Clock",
  "Message",
  "Gamer",
  "Safari",
];
function addYourApp() {
  for (let myApp of myAppList) {
    // let newAppBox = document.createElement("div");

    // let newAppImage = document.createElement("div");
    // let newAppName = document.createElement("div");

    // newAppBox.classList.add("appBox");
    // newAppImage.classList.add("appImage");
    // newAppBox.id = `${myApp}`;
    // newAppImage.style.backgroundImage = `url(./icons/${myApp}.png) `;

    // newAppName.classList.add("appName");
    // newAppName.textContent = `${myApp}`;

    // finderLower.appendChild(newAppBox);

    // newAppBox.appendChild(newAppImage);
    // newAppBox.appendChild(newAppName);

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

    // 요소를 DOM에 추가
    newAppBox.append(newAppImage); // newAppBox에 newAppImage 추가
    newAppBox.append(newAppName); // newAppBox에 newAppName 추가
    $("#finderLower").append(newAppBox); // finderLower에 newAppBox 추가

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
