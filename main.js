const toggleSwitch = document.getElementById("slider");
const html = document.querySelector("html");

toggleSwitch.addEventListener("click", () => {
  toggleSwitch.classList.toggle("dark");
  html.classList.toggle("dark");
});
