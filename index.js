
let sumHome = document.getElementById("sum-home")
let sumGuest = document.getElementById("sum-guest")
let resultatHome = 0
let resultatGuest = 0
function home1(){
  resultatHome += 1
  sumHome.textContent = resultatHome
  highlightLeadingTeam();
 }
function home2(){
  resultatHome += 2
  sumHome.textContent = resultatHome
  highlightLeadingTeam();
 }
function home3(){
  resultatHome += 3
  sumHome.textContent = resultatHome
  highlightLeadingTeam();
 }
 function guest1(){
  resultatGuest += 1
  sumGuest.textContent = resultatGuest
   highlightLeadingTeam();
 }
function guest2(){
  resultatGuest += 2
  sumGuest.textContent = resultatGuest
  highlightLeadingTeam();
 }
function guest3(){
  resultatGuest += 3
  sumGuest.textContent = resultatGuest
  highlightLeadingTeam();
 }

function highlightLeadingTeam() {
  sumHome.classList.remove("score-highlight");
  sumGuest.classList.remove("score-highlight");

  if (resultatHome > resultatGuest) {
    sumHome.classList.add("score-highlight");
  } else if (resultatGuest > resultatHome) {
    sumGuest.classList.add("score-highlight");
  }
}
function reStart(){
  resultatGuest = 0
  resultatHome = 0
  sumGuest.textContent = resultatGuest
   sumHome.textContent = resultatHome
  sumHome.classList.remove("score-highlight");
  sumGuest.classList.remove("score-highlight");
}