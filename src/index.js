import './style.css';
import { rendermain } from './hometab.js';
import{rendermenu} from './menu.js'





 let hometab = document.getElementById('hometab')
 let menutab = document.getElementById('menutab')


menutab.addEventListener('click',rendermenu)
hometab.addEventListener('click',rendermain)
rendermain()
 
hometab.addEventListener('click',()=>{console.log("ello")})


