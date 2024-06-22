
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



////////////////Iteration 5//////////////////



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






//////////////// Iteration 6 //////////////////

const url = window.location.href //текущий URL
alert(`URL - ${url}`); 


const editPage = document.querySelector('.editPage')
// Добавление новой записи в историю
editPage.addEventListener('click', () => {
    if(editPage.textContent === 'Контакты'){
        editPage.textContent = 'Главная'
        window.history.pushState({page:'контакты'}, 'контакты', '/contact')
        
    } else {
        editPage.textContent = 'Контакты' 
        window.history.pushState({page:'главная'}, 'главная', '/about')
    }
})

window.addEventListener('popstate', (event)=>{
    if(event.state){
        console.log(event.state.page);
    }
})

// Получение истории
function getHistory() {
    return window.history;
}
const history = getHistory()
console.log(history);

// Навигация назад
function goBack() {
    window.history.back();
}

// Навигация вперед
function goForward() {
    window.history.forward();
}

// Переход на определённое количество шагов
function goTo(steps) {
    window.history.go(steps);
}



// Cookie
document.cookie = "userId=123; max-age=3600"; // cookie будет удалено через 1 час
document.cookie = "userName=Liza; max-age=3600"; // cookie будет удалено через 1 час
// Перезапись cookie
setInterval(() => {
    let id = Math.round(Math.random() * 10000)
    document.cookie = `userId=${id}; max-age=3600; secure; `; 
    alert(`Cookie были изменены, userId=${id}`)
}, 30000);


function getCookie(name) {
    let cookie = document.cookie.split(';')
    for (let i = 0; i < cookie.length; i++) {
        let [key, value] = cookie[i].trim().split('=')
        if (key === name) {
            return value;
        }
    }
    return null;
}

let userId = getCookie('userId');
console.log(userId);  


//LocalStorage

const sendBtn = document.querySelector('.save')
sendBtn.addEventListener('click', () => {
    let text = document.querySelector('.text')
    debugger
    if(!text.value){
        alert('Введите что-то')
        return
    } else {
        let lastData = localStorage.getItem('data')
        let updateData = lastData ? lastData + '\n' + text.value : text.value
        localStorage.setItem('data', updateData)
        alert('Данные успешно записаны')
        text.value=''
    }
})

const loadBtn = document.querySelector('.load')
loadBtn.addEventListener('click', () => {
    let data = localStorage.getItem('data')
    if(data){
        alert(localStorage.getItem('data'))
    } 
})

// localStorage.clear()