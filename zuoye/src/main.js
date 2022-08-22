
import { tab} from "./tab.js";
import { marquee } from "./marquee.js";

tab();
marquee();

import"./styles/index.css"
import"./styles/index.less"

import gifSrc from"./assets/1.gif"
const img=document.createElement("img")
img.src=gifSrc
document.body .appendChild(img)

import pngSrc from"./assets/logo_small.png"
const img2=document.createElement("img")
img2.src=pngSrc
document.body .appendChild(img2)

