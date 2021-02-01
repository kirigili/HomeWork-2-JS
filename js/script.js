console.log("Задание1");
console.log('\n');
let name = prompt('Ваше имя?');
let age = prompt('Ваш возвраст?');
let city = prompt('Ваш город проживания?');
let phone = prompt('Ваш номер телефона?');
let email = prompt('Ваша электронная почта?');
let company = prompt('Где вы работаете?');
console.log('Меня зовут ' + name, 'Мне ' + age, 'Я проживаю в городе ' + city, 'Мой номер телефона ' + phone, 'Моя электронная почта ' + email, );
console.log('\n')


console.log("Задание2");
console.log('\n');
console.log(name + ' родился в ' + (2021 - age) + ' году');
console.log('\n');


console.log("Задание3");
console.log('\n');
let num = prompt('Введите шестизначное число');
    num1 = parseInt(num / 100000);
    num2 = parseInt(num / 10000) - num1 * 10,
    num3 = parseInt(num / 1000) - (num1 * 10 + num2) * 10;
    num4 = parseInt(num / 100) - (num1 * 100 + num2 * 10 + num3) * 10;
    num5 = parseInt(num / 10) - (num1 * 1000 + num2 * 100 + num3 * 10 + num4) * 10;
    num6 = parseInt(num) - (num1 * 10000 + num2 * 1000 + num3 * 100 + num4 * 10 + num5) * 10;
    sum1 = (num1 + num2 + num3);
    sum2 = (num4 + num5 + num6);

console.log(sum1 == sum2 ? 'равна' : 'неровна');

console.log("Задание4");
console.log('\n');
let e = prompt('Введите число');
if(e > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
console.log('\n')


console.log("Задание5");
console.log('\n');
let a = 10,
    b = 2,
    sum = a + b,
    diff = a - b,
    mult = a * b,
    div = a / b;

console.log('сумма ' + sum);
console.log('разность ' + diff);
console.log('произведение ' + mult);
console.log('частное ' + div);
    
if(sum > 1) {
    console.log('степень ' + sum ** 2);
}
console.log('\n');


console.log("Задание6");
console.log('\n');
(a > 2 && a < 11 || b >= 6 && b < 14) ? console.log('Верно') : console.log('Неверно');
console.log('\n');


console.log("Задание7");
console.log('\n');
let n = prompt('В какую четверть часа попадает заданное число?');
let time = (n < 14) ? 'Первая четверть часа' : (n >= 14 && n < 29 ) ? 'Вторая четверть часа' : (n >= 29 && n < 44 ) ? 'Третья четверть часа' : 'Четвертая четверть часа';
console.log(time);
console.log('\n');


console.log("Задание8");
console.log('\n');
let day = prompt('В какую декаду месяца попадает число?');
if(day < 11) {
    console.log('Первая декада');
} else if (day >= 11 && day < 20) {
    console.log('Вторая декада');
} else {
    console.log('Третья декада');
}
console.log('\n');


console.log("Задание9");
console.log('\n');
let d = prompt('Введите количество дней?');
    years = d / 365;
if(years >= 1) {
    console.log(years);
}   else {
    console.log('Меньше года');
}

let f = prompt('Введите количество дней?');
    mounth = f / 31;
if(mounth >= 1) {
    console.log(mounth);
}   else {
    console.log('Меньше месяца');
}

let g = prompt('Введите количество дней?');
    week = g / 7;
if(week >= 1) {
    console.log(week);
}   else {
    console.log('Меньше недели');
}

let h = prompt('Введите количество минут');
    min = h / 60;
if(min >= 1) {
    console.log('min');
}   else {
    console.log('Меньше часа');
}

let j = prompt('Введите количество секунд');
    sec = j / 60;
if(sec >= 1) {
    console.log(sec);
}   else {
    console.log('Меньше минуты');
}
console.log('\n');


console.log("Задание10");
console.log('\n');
let moon, season;
if(d > 0){
    if (d <= 31) moon = 1;
    if (d <= 59) moon = 2;
    if (d <= 90) moon = 3;
    if (d <= 120) moon = 4;
    if (d <= 151) moon = 5;
    if (d <= 181) moon = 6;
    if (d <= 212) moon = 7;
    if (d <= 243) moon = 8;
    if (d <= 273) moon = 9;
    if (d <= 304) moon = 10;
    if (d <= 334) moon = 11;
    if (d <= 365) moon = 12;
}   else  moon = '12+';
    switch (moon){
        case 1:
        case 2:
        case 12:
            season = 'Зима'
            break;
        case 3:
        case 4:
        case 5:
            season = 'Весна'
            break;
        case 6:
        case 7:
        case 8:
            season = 'Летто'
            break;  
        case 9:
        case 10:
        case 11:
            season = 'Осень'
            break;  
    }

console.log(moon + ' Месяц ' + season);
