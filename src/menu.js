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


}
export{rendermenu}