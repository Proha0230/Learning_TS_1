// Дана функция head, которая возвращает либо первый символ переданной строки,
// либо первый элемент переданного массива.

// Приведенные типы функции заведомо избыточны. Необходимо переписать их, используя подход перегрузки.

// function head(value: string | number[] | boolean[]): string | number | boolean {
//     return value[0];
//   }


function head (value: string): string;
function head (value: number[]): number;
function head (value: boolean[]): boolean;

function head (value: any): any {
  return value[0];
}

head("Checking");
head([1,2,3,4]);
head([true, false, true]);