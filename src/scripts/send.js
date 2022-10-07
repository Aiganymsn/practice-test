window.addEventListener("DOMContentLoaded", function () {
 
  
   const form = document.getElementById("form");
  
   const status = document.getElementById("status");
 
  
 
   
   function success() {
      form.reset();
      status.innerHTML =  { 'ru' : 'Ваша заявка принята!', 'kz' : 'Сіздің өтінішіңіз қабылданды!', 'en' : 'Your application is accepted!' }[hash];
    }
  
    function error() {
      status.innerHTML = {'ru': 'Упс, что-то пошло не так', 'kz':'Ой, бірдеңе дұрыс болмады', 'en': 'Oops, something went wrong'}[hash];
    }
 
 
   form.addEventListener("submit", function (ev) {
     ev.preventDefault();
     var data = new FormData(form);
     ajax(form.method, form.action, data, success, error);
   });
 });
 
 
 function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function () {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
 }
 