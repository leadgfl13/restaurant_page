function rendermenu(){
let contentarea = document.getElementById('content')
contentarea.innerHTML = ''
let menu = document.createElement('div')
contentarea.append(menu)
menu.setAttribute('id','menumain')

}
export{rendermenu}