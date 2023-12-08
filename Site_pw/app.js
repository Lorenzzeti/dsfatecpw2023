function myFunction() {
  var theme = document.body.classList.toggle("dark-theme"); 
}


const btn = document.querySelector("btn.onclick");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light-theme") {
  document.body.classList.add("light-theme");
} else if (currentTheme == "dark-theme") {
  document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function () 
{
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
    ? "light"
    : "dark";
    } 
  else {
    document.body.classList.add("light-theme");
    var theme = document.body;element.classList.contains("light-theme")
      ? "dark"
      : "light";
      }
  localStorage.setItem("theme", theme);
});