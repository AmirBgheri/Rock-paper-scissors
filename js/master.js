const play = document.getElementById("play-btn");
const option = document.getElementById("option-btn");
const guide = document.getElementById("guide-btn");
const closeoption = document.getElementById("close-optiontxt");
const optiontxt = document.getElementById("option-txt");
const guidetxt = document.getElementById("guide-txt");
const closeguide = document.getElementById("close-guidetxt");
const icons = document.querySelector(".icons");
const cpuwin = document.querySelector(".cpuwin");
const Draw = document.querySelector(".draw");
const userwin = document.querySelector(".userwin");
const endgame = document.querySelector(".endgame");
let playerscore = document.getElementById("user-score");
let cpus = document.getElementById("cpu-score");
const musiccolor = document.querySelector(".music");
const music = document.getElementById("bg-music");
const musicIcon = document.getElementById("music-icon");
const popup = document.getElementById("music-popup");
const allow = document.getElementById("allow-music");
const deny = document.getElementById("deny-music");
let userScore = 0;
let cpuScore = 0;
let currentRound = 0;
let totalRounds = getSelectedRounds(); // از مقدار رادیوباتن می‌گیره

// تابع برای خوندن مقدار رادیوباتن انتخاب‌شده
function getSelectedRounds() {
   const checked = document.querySelector('input[name="rounds"]:checked');
   return checked ? parseInt(checked.value) : 3; // پیش‌فرض 3 راند
}
play.addEventListener('click', () => {
   const starter = document.getElementById("starter");
   starter.classList.remove("opacity-100", "scale-100");
   starter.classList.add("opacity-0", "scale-150");
   icons.classList.remove("opacity-0" , "translate-y-[2000px]");
   icons.classList.add("opacity-100", "translate-y-0");
   musiccolor.classList.remove('translate-y-2');
   musiccolor.classList.add('translate-y-20');
})

option.addEventListener('click', () => {

   optiontxt.classList.remove("translate-x-[5000px]", "opacity-0");
   optiontxt.classList.add("translate-x-5", "opacity-100");
})

closeoption.addEventListener('click', () => {
   optiontxt.classList.remove("translate-x-5", "opacity-100");
   optiontxt.classList.add("translate-x-[5000px]", "opacity-0");
})

guide.addEventListener('click', () => {
   guidetxt.classList.remove("translate-y-[5000px]", "opacity-0");
   guidetxt.classList.add("translate-y-0", "opacity-100");
})

closeguide.addEventListener('click', () => {
   guidetxt.classList.add("translate-y-[5000px]", "opacity-0");
   guidetxt.classList.remove("translate-y-0", "opacity-100");
})


// end starter 

const papericon = document.getElementById("paper-icon");
const rockicon = document.getElementById("rock-icon");
const scissorsicon = document.getElementById("scissors-icon");
const userhands = document.querySelectorAll("#user-hand img");
const cpuhands = document.querySelectorAll("#cpu-hand img");



function resetHands() {
   userhands.forEach(hand => {
      hand.classList.add("translate-x-[-5000px]");
      hand.classList.remove("translate-x-0");
   });
   cpuhands.forEach(hand => {
      hand.classList.add("translate-x-[5000px]");
      hand.classList.remove("translate-x-0");
   });
}

function randomCPU() {
   return Math.floor(Math.random() * 3);
}


function playRound(userIndex) {
   resetHands();


   userhands[userIndex].classList.remove("translate-x-[-5000px]");


   const cpuIndex = randomCPU();
   cpuhands[cpuIndex].classList.remove("translate-x-[5000px]");

   // بررسی برنده
   if (userIndex === cpuIndex) {
      console.log("Draw!");
      Draw.classList.remove("opacity-0", "translate-y-[5000px]");
      cpuwin.classList.remove("opacity-100", "translate-y-0");
      userwin.classList.remove("opacity-100", "translate-y-0");
      cpuwin.classList.add("opacity-0", "translate-y-[5000px]");
      userwin.classList.add("opacity-0", "translate-y-[5000px]");
      Draw.classList.add("opacity-100", "translate-y-0");
      setTimeout(() => {
         Draw.classList.add("translate-y-[5000px]")
      }, 1000);
   } else if (
      (userIndex === 0 && cpuIndex === 1) ||
      (userIndex === 1 && cpuIndex === 2) ||
      (userIndex === 2 && cpuIndex === 0)
   ) {
      userScore++;
      userwin.classList.remove("opacity-0", "translate-y-[5000px]");
      Draw.classList.remove("opacity-100", "translate-y-0");
      cpuwin.classList.remove("opacity-100", "translate-y-0");
      Draw.classList.add("opacity-0", "translate-y-[5000px]");
      cpuwin.classList.add("opacity-0", "translate-y-[5000px]");
      userwin.classList.add("opacity-100", "translate-y-0");
      setTimeout(() => {
         userwin.classList.add("translate-y-[5000px]")
      }, 1000);
      currentRound++;
      playerscore.innerText = userScore;
      console.log("User wins! Score:", userScore);
   } else {
      cpuScore++;
      cpuwin.classList.remove("opacity-0", "translate-y-[5000px]");
      Draw.classList.remove("opacity-100", "translate-y-0");
      userwin.classList.remove("opacity-100", "translate-y-0");
      Draw.classList.add("opacity-0", "translate-y-[5000px]");
      userwin.classList.add("opacity-0", "translate-y-[5000px]");
      cpuwin.classList.add("opacity-100", "translate-y-0");
      setTimeout(() => {
         cpuwin.classList.add("translate-y-[5000px]")
      }, 1000);
      currentRound++;
      cpus.innerText = cpuScore;
      console.log("CPU wins! Score:", cpuScore);
   }
   const victory = document.getElementById("victory-page");
   const defeat = document.getElementById("Defeat-page");
   if (userScore >= totalRounds) {
      console.log("Game Over!");
      console.log(`Final Score => User`);
      endgame.classList.remove("translate-x-[-2000px]", "rotate-180");
      endgame.classList.add("translate-x-0", "rotate-0");
      victory.classList.remove("hidden");
      defeat.classList.add("hidden");

      return;
   } else if (cpuScore >= totalRounds) {
      console.log("Game Over!");
      console.log(`Final Score => cpu`);
      endgame.classList.remove("translate-x-[-2000px]", "rotate-180");
      endgame.classList.add("translate-x-0", "rotate-0");
      defeat.classList.remove("hidden");
      victory.classList.add("hidden");
   }



}

const homebtn = document.getElementById("homepage-btn");
homebtn.addEventListener('click', () => {
   starter.classList.add("opacity-100", "scale-100");
   starter.classList.remove("opacity-0", "scale-150");
   icons.classList.add("opacity-0");
   icons.classList.remove("opacity-100");
   endgame.classList.add("translate-x-[-2000px]", "rotate-180");
   endgame.classList.remove("translate-x-0", "rotate-0");
   musiccolor.classList.remove('translate-y-20');
   musiccolor.classList.add('translate-y-2');
   currentRound = 0;
   userScore = 0;
   cpuScore = 0;
   playerscore.innerText = "0"
   cpus.innerText = "0"
})


document.querySelectorAll('input[name="rounds"]').forEach(radio => {
   radio.addEventListener("change", () => {
      totalRounds = getSelectedRounds();
      currentRound = 0;
      userScore = 0;
      cpuScore = 0;
      console.log(`Rounds set to ${totalRounds}`);
   });
});
// اتصال دکمه‌ها به تابع بازی
papericon.addEventListener("click", () => playRound(0));
rockicon.addEventListener("click", () => playRound(1));
scissorsicon.addEventListener("click", () => playRound(2));

// music part 

let isPlaying = false;

// شروع پخش وقتی کاربر کلیک کرد
musicIcon.addEventListener("click", () => {
   if (!isPlaying) {
      music.play();
      musicIcon.src = "img/volume.png"; // آیکن صدا روشن
      musiccolor.style.background = "#1FA3A8"
   } else {
      music.pause();
      musicIcon.src = "img/mute (1).png"; // آیکن قطع صدا
      musiccolor.style.background = "#E84C5A"
   }
   isPlaying = !isPlaying;
});




allow.addEventListener("click", () => {
   music.play();
   popup.classList.add("opacity-0", "pointer-events-none");
   setTimeout(() => popup.remove(), 500);
});

deny.addEventListener("click", () => {
   popup.classList.add("opacity-0", "pointer-events-none");
   setTimeout(() => popup.remove(), 500);
});

