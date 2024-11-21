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
    let newListElement = $("<li>", { text: objectListElement });
    newListElement.css({
      padding: "3px 10px 3px 10px",
      border: "none",
    });
    newListElement.hover(
      function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0.206)");
      },
      function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0)");
      }
    );

    $("#topBarleftNavigation").append(newListElement);

    newListElement.click(() => {
      if (!clickCounter) {
        $("#upperHoverContainer").html("");
        $("#upperHoverContainer").css({
          display: "block",
        });

        Object.values(objectListValue).forEach((value) => {
          for (singleDiv of value) {
            let finderMenuDiv = $("<div>", { text: singleDiv });
            finderMenuDiv.css({
              border: "1px solid black",
              padding: "4px",
              paddingRight: "50px",
              margin: "0px",
              color: "white",
              backgroundColor: "black",
            });
            finderMenuDiv.hover(
              function () {
                $(this).css("background-color", "rgb(21, 106, 212)");
              },
              function () {
                $(this).css("background-color", "black");
              }
            );
            $("#upperHoverContainer").append(finderMenuDiv);
          }
        });

        clickCounter = true;
      } else {
        $("#upperHoverContainer").css({
          display: "none",
        });
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
