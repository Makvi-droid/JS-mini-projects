// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import ladyMaria from './maria.jpg';

const image = document.createElement("img");
image.src = ladyMaria;
   
document.body.appendChild(image);

console.log(greeting);
