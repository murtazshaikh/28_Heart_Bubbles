"use strict";

const createHeart = () => {

    const h = document.createElement("div");
    h.classList.add("heart");
    h.style.left = Math.random()*100+"vw";
    h.style.animationDuration = Math.random()*2+6+"s";
    h.innerText = "❤";

    document.body.appendChild(h);

    setTimeout(()=>{
        h.remove();
    },5000);
}
setInterval(createHeart, 200);