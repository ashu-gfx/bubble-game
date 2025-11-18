var pbtm = document.querySelector('.pbtm')
var timerval = document.querySelector('#timerval')
var timer = 60
var hitval = document.querySelector('#hitval')
var score = 0
var scoreval = document.querySelector('#scoreval')
var loose = document.querySelector('.loose')
var reload = document.querySelector('.reload')

function increaseScore () {
  score += 10
  scoreval.textContent = score
}

function decreaseScore () {
  score -= 10
  scoreval.textContent = score
}

function getNewHit () {
  var random1 = Math.floor(Math.random() * 10)
  hitval.textContent = random1
}

function makeBubble () {
  var clutter = ''

  for (var i = 1; i < 153; i++) {
    var random = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${random}</div>`
  }

  pbtm.innerHTML = clutter
}

function runTimer () {
  var timerrepeat = setInterval(function () {
    if (timer > 0) {
      timer--
      timerval.textContent = timer
    } else if (timer == 0) {
      //   loose.style.visibility = 'visible'
      pbtm.innerHTML = `<h1 class="over">Game Over!</h1>`
      clearInterval(timerrepeat)
    } else {
    }
  }, 1000)
}

//var bubble = document.querySelector('.pbtm .bubble')

// function matchValue () {
//   console.log(hitval.textContent)

//   document.querySelector('.pbtm .bubble').addEventListener('click', function (dets) {
//     console.log(dets)
//   })
//   // if (hitval.textContent == ) {
//   //   timer--
//   //   timerval.textContent = timer
//   // }
// }

pbtm.addEventListener('click', function (dets) {
  console.log(dets.target.textContent)

  var matchval = Number(dets.target.textContent)
  console.log(matchval)
  console.log(hitval.textContent)
  console.log(Number(hitval.textContent))

  if (Number(hitval.textContent) == matchval) {
    increaseScore()
    getNewHit()
    makeBubble()
  } else if (Number(hitval.textContent) != matchval) {
    decreaseScore()
    if (score < 0) {
      // alert("loose")
      pbtm.innerHTML = `<h1 class="over">You Loose!</h1>`
      // loose.style.visibility = 'visible'
    }
  }
  // alert("w")
})

reload.addEventListener('click', function () {
  // location.reload()
})

// function hitSettimeout() {
//   setInterval(function () {
//
//   }, 1000)
// }

runTimer()
makeBubble()
// getNewHit()
// Timeout()
// hitSettimeout()
// matchValue()
// increaseScore()
