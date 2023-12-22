$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {

      $(".loading").addClass('hide');
    } else {

      sessionStorage.setItem('access', 'true'); 
      $(".loading-animation").addClass('hide'); 
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('hide');
        $(".loading-animation").removeClass('hide');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
});