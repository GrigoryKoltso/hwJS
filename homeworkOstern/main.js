// Напишите функцию checkEmail(string), которая в качестве аргумента будет получать строковый тип. Функция должна проверить, есть ли в строке символ “@” и “.” Если оба символа будут находиться в строке - функция должна вернуть true, в противном случае false

// 	Пример:
// 	let result1 = checkEmail(“some@email.com”)
// 	let result2 = checkEmail(“some@emailcom”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	true
// 	false

function checkEmail(string) {

        if(string.includes('@') && string.includes('.')) {
           return true
        }else{
            return false
        }
    
}

console.log(checkEmail('some@email.com'));

// Напишите функцию initCap(string), которая получает строковое значение и возвращает эту же строку с заглавной первой буквой по примеру: 

// Пример:
// 	let result1 = initCap(“sam”)
// 	let result1 = initCap(“steven”)
// 	console.log(result1)
// console.log(result2)

// 	Результат: 
// 	Sam
// Steven

function initCap(string){
    let str = '';
    let big = string[0].toUpperCase()
    str+=big
    for(let i = 1; i < string.length; i++) {
       str+=string[i]
    }
    return str
}

console.log(initCap('sam'));

// Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array), которая будет получать в качестве аргумента массив и реализует очистку данных. Каждый номер карты нужно переопределить, заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

let cards = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859',
'4000 0016 3556 6899', 
'4000 0017 4456 4699' 
]

// Результат
//  [ 
// '****0012 0056****, 
// '****0013 5456****', 
// '****0014 1455****, 
// '****0015 3466****,
// '****0016 3556****, 
// '****0017 4456****’
// ]

// clearDataCards(cards)

function clearDataCards(array) {
    let arr = [];
    for(let elem of array) {
      let slice = elem.slice(4, 15)
        arr.push('****'+slice+'****')
    }
    return arr
}

console.log(clearDataCards(cards));

// Задан массив elems, передающий элемент HTML разметки. 
// Создайте функцию clearData(array), которая будет получать в качестве аргумента массив и реализует очистку данных по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 



	// Результат: ['Home','About','FAQ','Contacts']

    function clearData(array) {
        let arr = [];
        for(let elem of array) {
            let start = elem.indexOf('>') +17
            let end = elem.lastIndexOf('<') -4
            arr.push(elem.slice(start, end))
        }
        return arr
    }

    console.log(clearData(elems));
