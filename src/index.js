import './style.css';
import{rendermenu, renderabout, rendermain} from './menu.js';






 let hometab = document.getElementById('hometab')
 let menutab = document.getElementById('menutab')
 let about  = document.getElementById('abouttab')

 rendermain()

menutab.addEventListener('click',rendermenu)
hometab.addEventListener('click',rendermain)
about.addEventListener('click', renderabout)
 
hometab.addEventListener('click',()=>{console.log("ello")})


