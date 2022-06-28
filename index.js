//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatArray = array1.concat(array2);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const array3 = [1, 2, 3];
array3.reverse();

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const array4 = [1, 2, 3];
array4.push(4, 5, 6);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const array5 = [1, 2, 3];
array5.unshift(4, 5, 6);

//Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.

const array6 = ["js", "css", "html"];
array6.shift();

//Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.

const array7 = ["js", "css", "html"];
array7.pop();

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const array8 = [1, 2, 3, 4, 5];
const array9 = array8.slice(0, 3);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const array10 = [1, 2, 3, 4, 5];
const array11 = array10.slice(-2);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const array12 = [1, 2, 3, 4, 5];
array12.splice(1, 2);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const array13 = [1, 2, 3, 4, 5];
array13.splice(0, 1);
array13.splice(3);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const array14 = [1, 2, 3, 4, 5];
array14.splice(3, 0, "a", "b", "c");

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const array15 = [1, 2, 3, 4, 5];
array15.splice(1, 0, "a", "b");
array15.splice(6, 0, "c");
array15.splice(8, 0, "e");

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const array16 = [3, 4, 1, 2, 7];
array16.sort();

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const object = {
  js: "test",
  jq: "hello",
  css: "world",
};
const keyArray = Object.keys(object);

//Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

function hasElem(array, string) {
  return array.includes(string);
}

//Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

function hasNumber(array, number) {
  return array.includes(number);
}
//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true  [2,2,1], а если нет - вернуть false [1,2,1].

array17 = [2, 2, 1];
array18 = [1, 2, 1];

function isEqualNext(array) {
  for (let i = 1; i <= array.length; i++) {
    if (array[i] === array[i - 1]) {
      return true;
    }
  }
  return false;
}

//Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()

function addRandomNumberToArray(array, min = 5, max = 33, amount = 10) {
  for (let i = 0; i < amount; i++) {
    array.push(Math.round(Math.random() * (max - min) + min));
  }
  return array;
}
//Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const arr = [12, 15, 20, 25, 59, 79];
const getAverageNumber = function (array) {
  if (array.length === 0) {
    return null;
  }
  const average =
    array.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }) / array.length;

  return average;
};

console.log(getAverageNumber(arr));