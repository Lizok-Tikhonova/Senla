
const button = document.querySelector('.ok')

//арифметические операции 
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
    } catch(e) {
        alert('Error: '+ e.message)
    }
})


////////////////Iteration 4 из HTML//////////////////

//Работа со cтроками
// let strName = prompt('Как вас зовут?')
// let strMovie = prompt('Ваш любимый фильм?')
// alert(`Тебя зовут ${strName}. ` + `Твой любимый фильм '${strMovie}'`)


const containerColor = document.querySelector('.containerColor')
const form = document.querySelector('.form')
const inputs = document.querySelectorAll('input')

function changeColorText(color1, color2){
    console.log(color1,color2)
    let containerText = document.querySelector('.containerText')
    setInterval(()=>{
        if(containerText.style.color==color1) {
            containerText.style.color = color2;
            containerText.textContent = 'Изменение контента: ЦВЕТ 1'
        } else {
            containerText.style.color = color1;
            containerText.textContent = 'Изменение контента: ЦВЕТ 2'
        }
    }, 2000)
}

changeColorText('blue', 'red')
       
function message(mess){
    alert(mess)
}
        
containerColor.addEventListener('mouseover',(e)=>{
    containerColor.textContent = 'Наведение (попробуй нажать)'
})
containerColor.addEventListener('mouseout',(e)=>{
    containerColor.textContent = 'Снятие курсора (попробуй нажать)'
})
        
inputs.forEach((input) => {
    input.addEventListener('focus', (e)=>{ 
        input.style.outline = '2px solid red'
    })
    input.addEventListener('blur', (e)=>{
        input.style.outline = ''
    })
})       



////////////////Iteration 5 из HTML//////////////////



//класс
class Product{
    constructor(name = 'Неизвестный', price = 0){ //параметры по умолчанию
        this.name = name
        this.price = price
    }

    infoProduct(){
        console.log(`Продукт: ${this.name}, Цена: ${this.price}`);
    }

    calcDiscount(percent = 0){
        let newPrise = this.price - this.price/100*percent
        console.log(`Новая цена на этот товар - ${newPrise}`); //шаблонная строка
    }
}

const product = new Product('Люстра', 1500);
console.log(product);
product.infoProduct()
product.calcDiscount(15)

class FoodProduct extends Product{
    constructor(name, price, calories){
        super(name, price) //super
        this.calories = calories
    }

    calcСalories(){
        if(this.calories < 250){
            console.log("Это блюдо диетическое");
        } else if(this.calories > 250 && this.calories < 450){
            console.log("Это блюдо содержит колорий в пределах нормы");
        } else{
            console.log("Слишком много калорий");
        }
    }
}

const dishes = new FoodProduct("Лазанья", 3500, 300)
dishes.calcСalories()


//деструктурзация объекта
const {name, price, calories} = dishes
console.log(`Название: ${name} \nЦена: ${price} \nКалории: ${calories}`);


//rest + стрелочная функция
const sum = (...numbers) => { 
    let sum = 0
    for (let num of numbers){
        sum += num
    }
    return sum
}

const result = sum(1, 2, 3) 
console.log(result)


//spread 
const rgb = ['red', 'green', 'blue'];
const colors = [...rgb, 'black', 'purple'];
console.log(colors);


//функция генератор
function* getTimeOfDay(){
    yield "утро"
    yield "день"
    yield "ночь"
}

const timeOfDay = getTimeOfDay()


for(let time of timeOfDay){
    console.log(time);
}

// console.log(timeOfDay.next())
// console.log(timeOfDay.next())
// console.log(timeOfDay.next())
// console.log(timeOfDay.next())



