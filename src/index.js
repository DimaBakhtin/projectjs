/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let index = 0; index < array.length; index += 1) {
    fn(array[index], index, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  const result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(fn(array[index], index, array));
  }

  return result;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let result = initial || array[0];

  for (let index = initial ? 0 : 1; index < array.length; index += 1) {
    let value = array[index];
    result = fn(result, value, index, array);
  }

  return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const result = [];

  for (let value of Object.keys(obj)) {
    result.push(value.toUpperCase());
  }

  return result;
}

export {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy
};
