const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

for(const text of document.querySelectorAll(".modal-action-text")) {
  const letters = text.textContent.split("");
  
  text.innerHTML = "";  
  
  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    
    span.className = "modal-action-text-letter";
    
    span.style.animationDelay = `${index * 300}ms`;
    span.style.animationDuration = `${(letters.length * 300) + 1000}ms`;
    
    span.innerHTML = letter;
    
    text.appendChild(span);
  });
}

/* --- Magic mouse effect --- */

let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const container = document.getElementById("magic-mouse-container"),
      cursor = document.getElementById("cursor");

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition
}

const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ["245 245 245", "59 130 246"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall-1", "fall-2", "fall-3"]
}