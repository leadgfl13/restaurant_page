
const hello = ()=>{
    let hometab = document.getElementById('hometab')

    alert("This is a test, it worked!")
}

function makeHeader(){
    let head = document.getElementById('head')
    let header = document.createElement('div')
    header.setAttribute('id','header')
    head.prepend(header)
    header.innerHTML = 'Leaders'
}
function addDiv(){
    let contentarea = document.getElementById('content')
    let thing = document.createElement('div')
    thing.setAttribute('id', 'thing')
    contentarea.append(thing)
    thing.innerHTML = 'test worked'
}



const rendermain =()=>{
    let contentarea = document.getElementById('content')
    let testarea = document.createElement('div')
    testarea.setAttribute('id','mainarea')
    contentarea.append(testarea)
    let blank = document.createElement('div')
    blank.setAttribute('id','blankarea')
    testarea.append(blank)
    makeHeader()
    addDiv()
    let square1 = document.createElement('div')
    square1.setAttribute('id','greeting')
    square1.innerHTML = 'Your taste buds will thank you'
    blankarea.append(square1)
    
}


export {hello, rendermain,};
