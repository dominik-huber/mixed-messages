const submitBtn = document.getElementById("submitBtn");
const messageFiled = document.getElementById("messageField");

const greeting = ["Hey", "Hello", "Hi"];
const nickname = ["Pork Chop", "Baby Face", "Tater Tot", "Cool Kid"];
const connector = "today you look";
const mood = ["funny", "strange", "silly"];


// generate random message after submit
submitBtn.addEventListener('click', event => {
  const randomGreeting  = greeting[Math.floor(Math.random() * greeting.length)];
  const randomNickname  = nickname[Math.floor(Math.random() * nickname.length)];
  const randomMood  = mood[Math.floor(Math.random() * mood.length)];

  const randomMessage = `
    ${randomGreeting}
    "${randomNickname}"
    ${connector}
    ${randomMood}.`;

  // show randdom message in p tag
  messageFiled.innerHTML = randomMessage;

});
