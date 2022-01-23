1./*	Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
 Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
*/
 
 let arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"]; 
 let sum = 0;
 let num = [];
 for ( i=0; i < arr.length; i++){
   if (isFinite(arr[i])){
     num.push(arr[i])
     sum += +arr[i];
   }
  }
  alert(sum);

2./*Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
Переберите массив и распечатайте в консоли значения его элементов,
возведенные в пятую степень, не используя функцию Math.pow().
*/


 let arr = [];
 for ( let i = 0; i < 5; i++) {

     arr.push (Math.floor(Math.random()*100)/100);
     
 }
 
 for (let key of arr) {
    console.log(key**5); 
  }


3./*	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
a.	Добавьте в начало массива значение ‘Backbone.js’
b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
*/


let arr = ["AngularJS", "jQuery"];

//a.
arr.unshift("Backbone.js"); 
//b.
arr.push("ReactJS","Vue.js"); 
//c.
arr.splice( 1, 0, "CommonJS"); 
//d.

let i = arr.indexOf("jQuery"); 
if ( i > -1) {
  arr.splice( i, 1); 
  alert (`${i} - Это здесь лишнее`);
} else {
  alert ("Item is not found");
}

4.	/*Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
 Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однаждысломалголовойфонарь’
 с помощью любых методов массива (indexOf, splice...). 
 Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
 */

let str = "Как однажды Жак звонарь сломал фонарь головой";

let arr = str.split(" ");
let arr1 = arr.splice (1,1,);
let arr2 = arr.splice (5,1,); 
let arr3 = arr.splice(3, 0, "однажды" );
let arr4 = arr.splice(4, 0, "головой" );
let str1 = arr.join(" ");

alert(`Исходный вар-т:${str}\n Итоговый вар-т:${str1}`);



5. /*	Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. 
С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран.
 Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
*/

 let person ={
  name: "Jonh",
  secondName: "Smith",
};
let key = prompt ("Введите свойство", "Свойство");
 if ( key in person ) {
   alert (person[key]);
 } else {
   person[key] = prompt ("Значение","Значение");
   console.log (person);
 }


 6.	/*Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
 прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные.
 Добавьте этот гаджет персоне, созданной ранее.
 
 */

let person = { };
let desc = {
  brand: prompt ("Brand","Brand"),
  model: prompt("Model","Model"),
  resolution: prompt("Resolution","Resolution"),
  color: prompt("Color","Color"),
}

console. log (person = {...desc});


7./*Создайте объект dates для хранения дат. 
Первая дата – текущая, newDate. 
Вторая дата – текущая дата минус 365 дней. 
Из prompt читается дата в формате yyyy-MM-dd. 
Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

*/


let current = new Date ();

let olderD = new Date ();
olderD.setDate(olderD.getDate()-365);

let dates = { 
    firstD: current ,
    secondD: olderD ,
    thirdD: new Date(prompt ("Enter any date","yyyy-MM-dd")),
}

let {firstD, secondD, thirdD} = dates;

if ( thirdD > secondD && thirdD < firstD ) {
    alert ("Входит в диапазон");
} else {
 alert (" Не входит в диапазон");
}


8./*Создайте пустой массив.
 В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива.
 После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
 
 */

let arr = [ ];
let num = [ ];
let i;
let sum = 0;

while (true) {
  let value = prompt ("Введите значение","Значение");
  if ( value !== null && value !== ""){
    arr.push(value);
 }else { 
    break;
  }
}

console.log (arr);

for ( i = 0; i < arr.length; i++){
if (isFinite(arr[i])){
        num.push(arr[i])
        sum += +arr[i];
      }
    }
  alert (sum);  

 9.	/*Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
*/
 
 let arr = [ ];

 for (let row = 1; row <= 10; row++) {
     arrExp = [ ];
   for (let col = 1; col <= 10; col++) {
     
    arrExp.push(`${row}x${col}=${row*col}`);
   } 
   arr.push(arrExp);
 }
 console.log (arr)



 10./*Создайте структуру данных, полностью описывающую html-разметку картинки.

<imgsrc="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
alt=""
style="border: 1px solid #ccc
"width="200" />

*/

image = {
  imgsrc: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  alt: "",
  style: {
    border_width: "1px",
    border_style: "solid",
    border_color: "#ccc",
  },
  width: "200",
}
