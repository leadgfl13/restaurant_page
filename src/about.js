const renderabout = ()=>{
    let contentarea = document.getElementById('content')
    contentarea.innerHTML = ''
    let about = document.createElement('div')
    contentarea.append(about)
    about.setAttribute('id','about')
    about.innerHTML = `
    
    Hours:</br> </br>
    Mon - 8am - 3pm </br> </br>
    Tue - 8am - 3pm </br></br>
    Wed - 8am - 3pm </br></br>
    Thu - 8am - 3pm </br></br>
    Fri - 8am - 3pm </br></br>
    Sat - 12pm - 3pm </br></br>
    Sun - 12pm - 3pm`
    }
    
    export{renderabout};