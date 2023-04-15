


const body = document.getElementById("db-click");

const hexColor = () => Math.floor(Math.random() * 16777215).toString(16);

body.addEventListener("dblclick", () => {
  body.style.background = `#${hexColor()}`;
});
