// ==================== toggle sideBar
const toggle = document.getElementById("toggle");
const sideBar = document.getElementById("sideBar");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sideBar.classList.toggle("active");
};
document.onclick = function (e) {
  if (e.target.id !== "sideBar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sideBar.classList.remove("active");
  }
};

// // ==================== chooseCity & chooseLang
let chooseCityx = JSON.parse(localStorage.getItem("chooseCityx")) || "";
let chooseLangx = JSON.parse(localStorage.getItem("chooseLangx")) || ""; 
let chooseCity = document.getElementById("chooseCity");
let chooseLang = document.getElementById("chooseLang");
chooseCity.innerText = chooseCityx;
chooseLang.innerText = chooseLangx;

// ============================================== roundTrip & airportTrip

const roundTrip = document.getElementById("roundTrip");
const airportTrip = document.getElementById("airportTrip");

roundTrip.addEventListener("click",()=>{
  roundTrip.style.backgroundColor = "#10a310";
  airportTrip.style.backgroundColor = "white";
});
airportTrip.addEventListener("click",()=>{
  airportTrip.style.backgroundColor = "#10a310";
  roundTrip.style.backgroundColor = "white";
});

// ==================== bottom first child
const about = document.getElementById("about");
const blogs = document.getElementById("blogs");
const careers = document.getElementById("careers");
const help = document.getElementById("help");
const h2under1 = document.getElementById("h2under1");
const h2under2 = document.getElementById("h2under2");
const h2under3 = document.getElementById("h2under3");
const h2under4 = document.getElementById("h2under4");

// ==================== bottom first child content
const content = document.getElementById("content");
const blogsContent = document.getElementById("blogsContent");
const careersContent = document.getElementById("careersContent");
const helpContent = document.getElementById("helpContent");

about.addEventListener("click", () => {
  h2under1.style.display = "block";
  h2under2.style.display = "none";
  h2under3.style.display = "none";
  h2under4.style.display = "none";
  content.style.display = "block";
  blogsContent.style.display = "none";
  careersContent.style.display = "none";
  helpContent.style.display = "none";
});
blogs.addEventListener("click", () => {
  h2under2.style.display = "block";
  h2under1.style.display = "none";
  h2under3.style.display = "none";
  h2under4.style.display = "none";
  blogsContent.style.display = "block";
  content.style.display = "none";
  careersContent.style.display = "none";
  helpContent.style.display = "none";
});
careers.addEventListener("click", () => {
  h2under3.style.display = "block";
  h2under1.style.display = "none";
  h2under2.style.display = "none";
  h2under4.style.display = "none";
  careersContent.style.display = "block";
  blogsContent.style.display = "none";
  content.style.display = "none";
  helpContent.style.display = "none";
});
help.addEventListener("click", () => {
  h2under4.style.display = "block";
  h2under1.style.display = "none";
  h2under2.style.display = "none";
  h2under3.style.display = "none";
  helpContent.style.display = "block";
  careersContent.style.display = "none";
  blogsContent.style.display = "none";
  content.style.display = "none";
});