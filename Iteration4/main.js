
let button = document.querySelector('.ok')

button.addEventListener('click', (e) => {
    // e.preventDefault()
    let result = document.querySelector('.result')
    let num1 = +document.querySelector('.num1').value
    let num2 = +document.querySelector('.num2').value
    let symbol = document.querySelector('.symbol').value

    try{
        if(!num1 && !num2){ 
            result.textContent =  `Результат`
            throw new Error("Введены не числа");  
        }
            if(symbol == '+'){
                result.textContent =  `Результат ${num1+num2}`
            } else if(symbol == '-'){
                result.textContent =  `Результат ${num1-num2}`
            } else if(symbol == '*'){
                result.textContent =  `Результат ${num1*num2}`
            } else if(symbol == '/'){
                result.textContent =  `Результат ${num1/num2}`
            } else{
                alert('Считаются только арифметические операции')
                result.textContent =  `Результат = `
            }   
    } catch(e){
        alert('Error: '+ e.message)
    }

    //  else {
    //     alert('Введите числа')
    //     result.textContent =  `Результат`
    // }    
})
