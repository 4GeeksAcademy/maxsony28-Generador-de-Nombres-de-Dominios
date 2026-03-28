import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['mine', 'yours', 'his', 'hers', 'ours', 'theirs'];
let adjetive = ['awesone', 'large', 'fast', 'big', 'huge'];
let noun = ['jogger', 'raccon', 'city', 'table'];
let extensions = ['.com', '.net', '.us', '.ve'];

function generateRandomDomain() {
  let promombre = pronoun[Math.floor(Math.random() * pronoun.length)];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


