"use strict" 

function loadedPage() {
  const loadingID = document.getElementById("loading");
  loadingID.classList.add("loaded");
}

if (!sessionStorage.getItem('visited')) {
  sessionStorage.setItem('visited', 'first');
  window.addEventListener('load', function () {
    setTimeout(loadedPage, 5000);
  });
  setTimeout(loadedPage, 7000);
}else {
  loadedPage();
}
