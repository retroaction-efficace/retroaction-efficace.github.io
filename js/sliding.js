import{visibility}from"./main.js";export function sliding(){const e=[...document.querySelectorAll('[id^="module-"]')];if(!e.length)return;let t=1;const n=document.querySelector("#indicators"),i=document.querySelector("#left"),c=document.querySelector("#right");function o(d){!function(d){t=d>e.length?1:d<1?e.length:d,e.forEach((function(t,n){e[n].classList.add("hidden")})),e[t-1].classList.remove("hidden"),n.innerHTML="",Array.from(e).forEach(((e,i)=>{const c=document.createElement("div");c.classList.add("circle",i<t&&"active"),c.addEventListener("click",(()=>o(t=i+1))),n.appendChild(c)})),i.classList.toggle("hidden",1===t),c.classList.toggle("hidden",t===e.length)}(d),window.scrollTo(0,0)}i.addEventListener("click",(function(){o(t-=1)})),c.addEventListener("click",(function(){o(t+=1)})),o(t)}