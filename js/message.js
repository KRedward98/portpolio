const MessageStart = document.getElementById("MessageStart");

const responses = [
  {
    keyword: "working history",
    respond:
      "Korean Army Service (2017.09 – 2019.06), Factory Delivery Manager (2019.08 – 2020.10), Entrepreneur – Recycling & Oil Sales Business (2021.02 – 2022.03).",
  },
  {
    keyword: "learning",
    respond:
      "Gained leadership, teamwork, and problem-solving skills during military service; learned logistics coordination and inventory management as a delivery manager; developed business strategies and negotiation skills as an entrepreneur.",
  },
  {
    keyword: "position and role",
    respond:
      "Served as a squad leader in the military, managed deliveries and inventory as a factory delivery manager, and led operations and negotiations in a recycling and oil sales business.",
  },
  {
    keyword: "self description",
    respond:
      "A proactive and strategic thinker with leadership experience, strong communication skills, and a solid background in logistics and entrepreneurship.",
  },
];

const keywords = responses.map((item) => item.keyword);

input_container.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const input = event.target.value.trim().toLowerCase();
    let found = false;

    if (!input) {
      const div = document.createElement("div");
      div.innerText =
        "You didn't put anything. Here some key words you can type down : working history, learning, position and role, self description ";

      div.classList.add("message");
      div.classList.add("left");

      MessageStart.appendChild(div);

      MessageStart.scrollTop = MessageStart.scrollHeight;

      return;
    }

    // let A of B
    // break statement
    for (const element of responses) {
      if (element.keyword === input) {
        found = true;

        const que = document.createElement("div");
        que.innerText = input;
        que.classList.add("message");
        que.classList.add("right");
        MessageStart.appendChild(que);

        const typingDiv = document.createElement("div");
        typingDiv.classList.add("typing-indicator", "message", "left");
        typingDiv.id = "typingIndicator";

        for (let i = 0; i < 3; i++) {
          const dot = document.createElement("span");
          dot.innerText = "●";
          typingDiv.appendChild(dot);
        }

        MessageStart.appendChild(typingDiv);
        MessageStart.scrollTop = MessageStart.scrollHeight;

        setTimeout(() => {
          typingDiv.remove();
          const res = document.createElement("div");

          res.innerText = element.respond;

          res.classList.add("message");
          res.classList.add("left");
          MessageStart.appendChild(res);
          MessageStart.scrollTop = MessageStart.scrollHeight;
        }, 1500);

        break;
      }
    }

    if (!found) {
      const res = document.createElement("div");
      const que = document.createElement("div");

      res.innerText =
        "You just put a wrong question. Here some key words you can type down : working history, learning, position and role, self description";
      que.innerText = input;

      res.classList.add("message");
      res.classList.add("left");
      que.classList.add("message");
      que.classList.add("right");

      MessageStart.appendChild(que);
      MessageStart.appendChild(res);

      MessageStart.scrollTop = MessageStart.scrollHeight;
    }
    event.target.value = "";
  }
});
