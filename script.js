const phrase = document.getElementById("phrase");
const button = document.getElementById("getStarted");
const card = document.querySelector(".card");

const warrenPhrases = [
  "Price is what you pay. Value is what you get.",
  "Honesty is a very expensive gift, Don't expect it from cheap people.",
  "Somebody once said that in looking for people to hire, you look for three qualities: integrity, intelligence, and energy. And if you don’t have the first, the other two will kill you. You think about it; it’s true. If you hire somebody without [integrity], you really want them to be dumb and lazy.",
  "I insist on a lot of time being spent, almost every day, to just sit and think. That is very uncommon in American business. I read and think. So I do more reading and thinking, and make less impulse decisions than most people in business. I do it because I like this kind of life.",
  "Someone's sitting in the shade today because someone planted a tree a long time ago.",
  "Be Fearful When Others Are Greedy and Greedy When Others Are Fearful",
  "If you’re in the luckiest one per cent of humanity, you owe it to the rest of humanity to think about the other 99 per cent.",
  "The most important thing to do if you find yourself in a hole is to stop digging.",
  "Risk comes from not knowing what you're doing",
  "The difference between successful people and really successful people is that really successful people say no to almost everything.",
  "No matter how great the talent or efforts, some things just take time. You can't produce a baby in one month by getting nine women pregnant.",
  "Rule No. 1 : Never lose money. Rule No. 2 : Never forget Rule No. 1",
  "It’s better to hang out with people better than you. Pick out associates whose behavior is better than yours and you’ll drift in that direction.",
  "I learned to go into business only with people whom I like, trust, and admire.",
  "It's nice to have a lot of money, but you know, you don't want to keep it around forever. I prefer buying things. Otherwise, it's a little like saving sex for your old age.",
  "Games are won by players who focus on the playing field –- not by those whose eyes are glued to the scoreboard.",
  "What the wise do in the beginning, fools do in the end.",
  "Never ask a barber if you need a haircut.",
];

function nextPhrase() {
  phrase.classList.add("none");
  setTimeout(() => {
    phrase.classList.remove("none");
    phrase.innerHTML = `"${
      warrenPhrases[Math.floor(Math.random() * warrenPhrases.length)]
    }"`;
  }, 500);
}

function transitionLoad() {
  setTimeout(() => {
    card.classList.remove("none");
  }, 500);
}

button.addEventListener("click", nextPhrase);

document.addEventListener("DOMContentLoaded", transitionLoad);
