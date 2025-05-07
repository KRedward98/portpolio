const boardSize = 6;
const words = ["HTML", "CSS", "JS", "ADOBE", "WP", "ENG", "KOR"];

const boardDiv = document.getElementById("board");

Object.assign(boardDiv.style, {
  display: "grid",
  gridTemplateColumns: `repeat(${boardSize},48px)`,
  gridTemplateRows: `repeat(${boardSize},48px)`,
  gap: "4px",
  justifyContent: "center",
  margin: "20px auto",
});

[...words].map((el) => {
  const word_items = document.getElementById("word-items");
  const newli = document.createElement("li");

  newli.innerText = el.toUpperCase();
  newli.id = el.toUpperCase();

  console.log(el);

  word_items.appendChild(newli);
});

const board = Array.from({ length: boardSize }, () =>
  Array(boardSize).fill("")
);

const directions = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: -1, y: -1 },
];

function placeWords() {
  for (let word of words) {
    let placed = false;
    word = word.toUpperCase();
    let attempts = 0;

    while (!placed && attempts < 500) {
      attempts++;
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const startX = Math.floor(Math.random() * boardSize);
      const startY = Math.floor(Math.random() * boardSize);
      let endX = startX + dir.x * (word.length - 1);
      let endY = startY + dir.y * (word.length - 1);

      if (endX < 0 || endX >= boardSize || endY < 0 || endY >= boardSize)
        continue;

      let canPlace = true;
      for (let i = 0; i < word.length; i++) {
        const x = startX + dir.x * i;
        const y = startY + dir.y * i;
        if (board[y][x] && board[y][x] !== word[i]) {
          canPlace = false;
          break;
        }
      }

      if (canPlace) {
        for (let i = 0; i < word.length; i++) {
          const x = startX + dir.x * i;
          const y = startY + dir.y * i;
          board[y][x] = word[i];
        }
        placed = true;
      }
    }

    if (!placed) {
      console.warn(`⚠️ Failed to place word: ${word}`);
    }
  }
}

function fillRandomLetters() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if (!board[y][x]) {
        board[y][x] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
}

let selectedCells = [];
let selectedWord = "";

function drawBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = "";

  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = board[y][x];
      cell.dataset.x = x;
      cell.dataset.y = y;

      cell.addEventListener("click", handleCellClick);

      boardElement.appendChild(cell);
    }
  }
}

function handleCellClick(e) {
  const cell = e.target;

  if (cell.classList.contains("selected") || cell.classList.contains("found"))
    return;

  selectedCells.push(cell);
  selectedWord += cell.textContent;
  cell.classList.add("selected");

  checkSelectedWord();
}

function checkSelectedWord() {
  const upperWord = selectedWord.toUpperCase();
  if (words.includes(upperWord)) {
    selectedCells.forEach((cell) => {
      cell.classList.remove("selected");
      cell.classList.add("found");
    });

    const listItem = document.getElementById(upperWord);
    if (listItem) {
      listItem.style.textDecoration = "line-through";
      listItem.style.color = "#aaa";
    }

    document.getElementById("message").textContent = `✅ Found: ${upperWord}`;
    selectedCells = [];
    selectedWord = "";
  } else if (selectedWord.length >= Math.max(...words.map((w) => w.length))) {
    selectedCells.forEach((cell) => cell.classList.remove("selected"));
    document.getElementById(
      "message"
    ).textContent = `❌ Not a word: ${upperWord}`;
    selectedCells = [];
    selectedWord = "";
  }
}

function startGame() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("restart-button").style.display = "inline-block";
  document.getElementById("cancel-button").style.display = "inline-block";
  restartGame();
}

function restartGame() {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      board[y][x] = "";
    }
  }

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("found", "selected");
  });

  words.forEach((w) => {
    const item = document.getElementById(w.toUpperCase());
    if (item) {
      item.style.textDecoration = "";
      item.style.color = "";
    }
  });

  document.getElementById("message").textContent = "";
  selectedCells = [];
  selectedWord = "";

  placeWords();
  fillRandomLetters();
  drawBoard();
}

function cancelSelection() {
  selectedCells.forEach((cell) => cell.classList.remove("selected"));
  selectedCells = [];
  selectedWord = "";
  document.getElementById("message").textContent = "선택이 취소되었습니다.";
}
