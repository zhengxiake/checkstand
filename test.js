 window.onload = function () {
     var table = document.getElementById('table');
     var db = document.getElementById('db');
     var fj = document.getElementById('fj');
     var isShow = true;
     db.onclick = function () {
         if (isShow) {
             table.className = 'hide';
             fj.className = 'hide';
             isShow = false;
         } else {
             table.className = 'show';
             fj.className = 'show';
             isShow = true;
         }
     }
     var payprev = document.getElementById('payprev');
     var payover = document.getElementById('payover');
     payprev.onclick = function () {
         payprev.style.display = 'none';
         payover.style.display = 'block';

     }

     jump = function(web){
         window.location.href = web;
     }
 }
