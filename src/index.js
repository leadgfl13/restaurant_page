import './style.css';
import { rendermain } from './hometab.js';
import{rendermenu} from './menu.js'





 let poop = document.getElementById('hometab')
 let menutab = document.getElementById('menutab')


menutab.addEventListener('click',rendermenu)

 
poop.addEventListener('click',()=>{console.log("ello")})

rendermain()

