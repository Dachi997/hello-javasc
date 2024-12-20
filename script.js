const text = "hello world";

const app = document.getElementById("app");

const container = document.createElement("div");
container.className = "container";

text.split("").forEach((char) => {
  const box = document.createElement("div");
  box.className = "calke-konteineri";
  box.textContent = char === " " ? "␣" : char;
  container.appendChild(box);
});


app.appendChild(container);
