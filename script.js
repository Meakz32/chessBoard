let wrapper = document.getElementById('wrapper')


function oddOrEven(i,j){
    return (i+j)%2 === 0
}

for(let i=0; i<8; i++){

    let newDiv = document.createElement('div')
    wrapper.appendChild(newDiv)
    newDiv.className = 'inner-wrapper'

    for(let j=0; j<8; j++){

        let innerWrapper = document.getElementsByClassName('inner-wrapper')[i]
        let newDiv2 = document.createElement('div')
        innerWrapper.appendChild(newDiv2)
        newDiv2.className = oddOrEven(i,j) ? 'white' : 'black' 

    }
}







