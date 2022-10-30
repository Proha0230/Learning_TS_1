// Затипизируйте данную функцию:

// function append(el, list) {
//   return list.concat(el)
// }


 export function append <T> (el: T, list: T[]) :T[] {
  return list.concat(el)
}

append(1, [1,1]);

// вместо буквы Т может быть любая буква или сочетание букв. 
// (1, [1,1]) - здесь 1 задает тип всем остальным переменным и задает
// тип на возвращение функции если поставить true/false то во всей
// функции будет boolean значение, если - "" то string.