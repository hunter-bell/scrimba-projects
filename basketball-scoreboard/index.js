let homeScore = document.getElementById('score-home')
let awayScore = document.getElementById('score-away')

function addHome1() {
  homeScore.textContent = Number(homeScore.textContent) + 1
}

function addHome2() {
  homeScore.textContent = Number(homeScore.textContent) + 2
}

function addHome3() {
  homeScore.textContent = Number(homeScore.textContent) + 3
}



function addAway(points) {
  awayScore.textContent = Number(awayScore.textContent) + points
}

function reset() {
  homeScore.textContent = 0
  awayScore.textContent = 0
}