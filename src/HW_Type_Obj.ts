// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle


type Product = {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string,
}

type Vehicle ={
    wheels: number,
    year: number,
    brand: string,
}

type Car = Product & Vehicle & {
    type: string,
    model: string,
}

//  можно написать так либо как в уроках:
//  type Car = {
//     type: string,
//     model: string,
//  } & Product & Vehicle

const car1: Car = {
     price: 10000,
     isNew: true,
     isSale: true,
     title: "Новый Автомобиль",
     wheels: 4,
     year: 2022,
     brand: "Jeep",
     type: "Кроссовер",
     model: "Grand Cherokee",
}