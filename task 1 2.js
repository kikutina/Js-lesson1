'use strict';
/* №1
Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру
в градусах по Фаренгейту. Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, 
где Tf — температура по Фаренгейту, Tc — по Цельсию.
*/
function celsiaToFaringeit() {
    let celsia = prompt('Введите температуру по Цельсию');
    let faringeit = (9 / 5) * celsia + 32;
    alert(`${celsia} градусов по Цельсию = ${faringeit} градусов по Фаренгейту`);
}
celsiaToFaringeit()

/*№2
Объявить две переменные: admin и name. Записать в name строку "Василий";
Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).*/

function task2() {
    let name, admin;
    name = 'Василий';
    admin = name;
    alert(admin);
}
task2()




