var meterBtn = document.querySelector(".meterBtn");
var startBtn = document.querySelector(".startBtn");
var chronoValue;
var pauseBtn = document.querySelector(".pauseBtn");
var btnRaz = document.querySelector(".razBtn");

startBtn.addEventListener('click', btnLancer);
pauseBtn.addEventListener('click',btnStop);
btnRaz.addEventListener('click',razBtn);



function btnLancer() {
    clearInterval(chronoValue);
    chronoValue = setInterval(increment, 1000);
    function increment() {
        value = meterBtn.innerHTML;
        value = parseInt(value);
        value = value + 1;
        meterBtn.innerHTML = value;
    }
}

function btnStop(){
    clearInterval(chronoValue);
    meterBtn.innerHTML = value;

}
function razBtn() {
    clearInterval(chronoValue);
    value = meterBtn.innerHTML;
    value = parseInt(value);
    value = 0;
    meterBtn.innerHTML = value;
}
