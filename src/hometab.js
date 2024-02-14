


function makeHeader(){
    let head = document.getElementById('head')
    let header = document.createElement('div')
    header.setAttribute('id','header')
    head.prepend(header)
    
    
    

    

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
    let square1 = document.createElement('div')
    square1.setAttribute('id','greeting')
    square1.innerHTML = `Leader's Cafe`
    blankarea.append(square1)
    
}


export {rendermain,};
