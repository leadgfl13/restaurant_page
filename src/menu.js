const rendermenu =()=>{
let contentarea = document.getElementById('content')
contentarea.innerHTML = ''
let menu = document.createElement('div')
contentarea.append(menu)
menu.setAttribute('id','menuarea')
let stylelabel = document.createElement('div')
menu.append(stylelabel)
stylelabel.setAttribute('id','heading')
stylelabel.innerHTML = 'Style'
let description = document.createElement('div')
description.setAttribute('id','description')
description.innerHTML = 'Deets'
menu.append(description)
let price = document.createElement('div')
price.setAttribute('id', 'price')
price.innerHTML = 'Price'
menu.append(price)
let style1 = document.createElement('div')
style1.setAttribute('id','style1')
menu.append(style1)
style1.innerHTML = 'Pour Over'
let style2 = document.createElement('div')
style2.setAttribute('id', 'style2')
menu.append(style2)
style2.innerHTML = 'French Press'
let description1 = document.createElement('div')
description1.setAttribute('id','desc1')
description1.innerHTML = `
A delicate creation.  How water is artfully poured onto a bed of freshly ground coffee.  As it filter, intoxicating
aromoas fill the air.  Produces a fine, delicate cup.  Well suited for lighter roasts`
menu.append(description1)
let description2 = document.createElement('div')
description2.setAttribute('id','desc2')
description2.innerHTML = `Grounds are immersed in the water and allowed to steep for 5 minutes.  Coffee produced from this
method tends to have a fuller body, with more rounded character to the brew.  Great all around choice!`
menu.append(description2)
let desc3 = document.createElement('div')
desc3.setAttribute('id','desc3')
desc3.innerHTML = `Coffee grounds are allowed to steep in cool water overnight.  Cold brewing coffee allows for the flavor to be extracted
slower over a longer period of time.  This results in a mellow, rounded and sweet flavor profile that is full bodied`
menu.append(desc3)
let cold = document.createElement('div')
cold.setAttribute('id','cold')
cold.innerHTML = 'Cold Brew'
menu. append(cold)
let price1 = document.createElement('div')
let price2 = document.createElement('div')
let price3 = document.createElement('div')
price1.setAttribute('id', 'price1')
price2.setAttribute('id', 'price2')
price3.setAttribute('id', 'price3')
menu.append(price1,price2,price3)
price1.innerHTML = '$3.49'
price2.innerHTML = '$4.00'
price3.innerHTML = '$4.50'
}




const renderabout = ()=>{
    let contentarea = document.getElementById('content')
    contentarea.innerHTML = ''
    let about = document.createElement('div')
    contentarea.append(about)
    about.setAttribute('id','about')
    about.innerHTML = `
    Hours:</br>
    Mon - 8am - 3pm </br> </br>
    Tue - 8am - 3pm </br></br>
    Wed - 8am - 3pm </br></br>
    Thu - 8am - 3pm </br></br>
    Fri - 8am - 3pm </br></br>
    Sat - 12pm - 3pm </br></br>
    Sun - 12pm - 3pm </br> </br>
    1100 Coffe Bean Lane
    `
    let description = document.createElement('div')
    description.innerHTML = "Proudly serving the finest coffees since 2023"
    contentarea.append(description)
    description.setAttribute('id','tag')
    let logo = document.createElement('div')
    logo.setAttribute('id', 'logo')
    contentarea.append(logo)
    }




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
    
    
    
    
export{rendermenu, renderabout, rendermain}