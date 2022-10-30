export interface Car {
    wheels: number; // обязательное поле, без него будет ошибка
    brand: string;  // обязательное поле, без него будет ошибка
    type: string;   // обязательное поле, без него будет ошибка
    isNew?: boolean;  // опциональное поле, необязательное либо boolean либо undefined
    name?: string;    // опциональное поле, необязательное либо boolean либо undefined
    [key:string]: unknown;   // добавляем сами поля ключ-значение, ключ это строка, значение может быть каким угодно
}

const car: Car ={
    wheels:4,
    brand: 'BMW',
    type: 'Sedan',
}

const car2: Car ={
    brand: 'AUDI',
    type: 'Crossover',
    wheels: 4,
}

// Добавляем новое поле ключ-значение в car2

car2.color = 'Black';