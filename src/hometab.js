

const rendermain =()=>{
    let contentarea = document.getElementById('content')
    contentarea.innerHTML = ''
    let homecontent = document.createElement('div')
    contentarea.append(homecontent)
    homecontent.setAttribute('id','homecontent')
    let square1 = document.createElement('div')
    square1.setAttribute('id','greeting')
    square1.innerHTML = `Leader's Cafe`
    homecontent.append(square1)
    
}


export {rendermain};
