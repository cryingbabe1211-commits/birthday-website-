let button =document.getElementById("openBtn");
let message =document.getElementById("message");
let petals =document.querySelectorAll(".petal");
button.onclick = function(){
  button.innerHTML = "opened"
 message.innerHTML = "happy birthday! whshing you the best year of your life till now🎂🥳👑🎁. And i hust wanna say Sorry for coming into your life well this is my last message to you i know you already have another boy i am here just to tell you sorry and good bye👋✌️"
  button.style.backgroundColor =" #8EC5FF";
  petals.forEach(function(petal){petal.style.display = "block";});
}