const PhoneHeaderIcons = document.getElementById("PhoneHeaderIcons");

const webpagelist = [
  "https://github.com",
  "https://www.linkedin.com/feed/",
  "https://www.google.com/maps/place/Palatine,+IL/@42.1080895,-88.0491195,8709m/data=!3m2!1e3!4b1!4m6!3m5!1s0x880e4b2fbfc93755:0x872123abccc87c00!8m2!3d42.1103041!4d-88.03424!16zL20vMHM1ZHY?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D",
];

[...PhoneHeaderIcons.children].map((el, index) => {
  el.addEventListener("click", () => {
    window.open(webpagelist[index], "_blank");
  });
});

[...PhoneHeaderIcons.children].forEach((icon) => {
  const text = icon.textContent; // 각 div 안의 텍스트
  icon.style.backgroundImage = `url(./images/${text}.png)`;
});
