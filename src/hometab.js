const hello = ()=>{
    let hometab = document.getElementById('hometab')

    alert("This is a test, it worked!")
}


const rendermain =()=>{
    let contentarea = document.getElementById('content')
    let testarea = document.createElement('div')
    testarea.setAttribute('id','mainarea')
    testarea.innerHTML= 'hello'
    
    contentarea.append(testarea)
    
}


export {hello, rendermain};
