"use strict" 

function loadedPage() {
  const loadingID = document.getElementById("loading");
  loadingID.classList.add("loaded");
  document.documentElement.className = 'no-fouc';
  $(document).ready(function () {
    $('.keisukePR').removeClass('keisukePR');
  });

  loadingID.parentNode.removeChild(loadingID);
}

if (!sessionStorage.getItem('visited')) {
  sessionStorage.setItem('visited', 'first');
  window.addEventListener('load', function () {
    setTimeout(loadedPage, 5000);
  });
  setTimeout(loadedPage, 7000);
} else {
  loadedPage();
}
