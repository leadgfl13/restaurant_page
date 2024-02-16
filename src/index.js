import './style.css';
import { rendermain } from './hometab.js';
import{rendermenu} from './menu.js';
import{renderabout} from './about.js';





 let hometab = document.getElementById('hometab')
 let menutab = document.getElementById('menutab')
 let abouttab  = document.getElementById('abouttab')

 rendermain()

menutab.addEventListener('click',rendermenu)
hometab.addEventListener('click',rendermain)
abouttab.addEventListener('click', renderabout)
 
hometab.addEventListener('click',()=>{console.log("ello")})


