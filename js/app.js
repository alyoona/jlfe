/*Scroll To Top Button*/
var goUpButton = document.getElementById('goUpButton')
window.onscroll = function () {
  'use strict';
  if (window.pageYOffset >= 100) {
    goUpButton.style.display = 'block';
  } else {
    goUpButton.style.display = 'none';
  }
}
goUpButton.onclick = function () {
  'use strict';
  window.scrollTo(0, 0);
}



document.getElementById("dropdownForPresentationName").addEventListener("click", openPresentationPlan);
function openPresentationPlan() {
  document.getElementById("presentationPlanForPresentationName").classList.toggle("active");
}

document.getElementById("dropdownForAgenda").addEventListener("click", openAgenda);
function openAgenda() {
  document.getElementById("agendaList").classList.toggle("active");
}

function vowelsAndConsonants(s) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    }
  }
  for (var i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      console.log(s[i]);
    }
  }
}

console.log(vowelsAndConsonants("javascriptloops"));








