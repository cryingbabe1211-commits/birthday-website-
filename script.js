let button =document.getElementById("openBtn");
let message =document.getElementById("message");
let petals =document.querySelectorAll(".petal");
button.onclick = function(){
  button.innerHTML = "opened"
 message.innerHTML = "happy birthday! wishing you happiness and peace"
  button.style.backgroundColor =" #8EC5FF";
  petals.forEach(function(petal){petal.style.display = "block";});
}