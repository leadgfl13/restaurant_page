const renderabout = ()=>{
    let contentarea = document.getElementById('content')
    contentarea.innerHTML = ''
    let about = document.createElement('div')
    contentarea.append(about)
    about.setAttribute('id','about')
    about.innerHTML = 'This is the about menu'
    }
    
    export{renderabout};