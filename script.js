function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 184; i++) {
    let k = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${k}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var rn =0;
function Hit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}
Hit();

document.querySelector("#pbtm").addEventListener("click",function(dets){
    console.log(dets.target.textContent);
    console.log(rn);
    if(rn == dets.target.textContent){
        scoreval();
    }

})
var score =0;
var score1 = document.querySelector("#score");
function scoreval() {
    score+=10;
    score1.textContent = score;
    Hit();
    makeBubble();
  }


var timer = 60;
function runtimer (){
    var timerval = setInterval(function () {
  if (timer > 0) {
    timer--;
    document.querySelector("#timer").textContent = timer;
  } else {
    clearInterval(timerval);
    document.querySelector("#pbtm").innerHTML= "";
    // alert("Game Over");
  }
}, 1000)};
runtimer();
