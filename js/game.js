const dino = document.getElementById("player");
const rock = document.getElementById("obstacle");
const score = document.getElementById("score");
const startButton = document.getElementById("startButton");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

function startGame() {
  if (isRunning) return; // Spiel kann nicht erneut gestartet werden, wenn es bereits läuft
  isRunning = true;
  startButton.textContent = "Pause";
  gameInterval = setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino)
      .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
      .getPropertyValue('left'));
    score.innerText++;

    if (rockLeft < 0) {
      rock.style.display = 'none';
    } else {
      rock.style.display = '';
    }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("Deine Punktzahl: " + score.innerText +
      "\n\nErneut spielen?");
    location.reload();
  }
}, 50);
}

function pauseGame() {
  if (!isRunning) return; // Spiel kann nicht pausiert werden, wenn es bereits angehalten ist
  isRunning = false;
  clearInterval(gameInterval);
  startButton.textContent = "Fortsetzen";
}

function toggleGame() {
  if (isRunning) {
    pauseGame();
  } else {
    startGame();
  }
}