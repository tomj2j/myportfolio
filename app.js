// thiss will update the div with the class clock
const clock = document.querySelector(".clock");

//this function will generate the time every time it gets called.
//padStart() adds the missing 0 to the mins and seconds, if they are just one digit values
const tick = () => {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  //console.log(`it is : ${h}:${m}:${s}`);
  // this const holds the html which will be passed to the querySelector
  const html = `
    <span>  </span>
    <span>${h}</span> : 
    <span>${m}</span> :
    <span>${s}</span>
    `;

  // this will send the html to the innerHTML of the class clock
  clock.innerHTML = html;
};

// setInterval will call the function "tick" every Second (1000 milliseconds)
setInterval(tick, 1000);
