var refs={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},DELAY=1e3,timerId=null;function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}function onStart(t){timerId=setInterval((function(){document.body.style.backgroundColor=getRandomHexColor()}),DELAY),t.target.disabled=!0}function onStop(){clearInterval(timerId),refs.startBtn.disabled=!1}refs.startBtn.addEventListener("click",onStart),refs.stopBtn.addEventListener("click",onStop);
//# sourceMappingURL=01-color-switcher.2c149052.js.map
