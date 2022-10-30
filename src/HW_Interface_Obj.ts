// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

interface IProduct {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string,
}

interface IVehicle {
    wheels: number,
    year: number,
    brand: string,
}

interface ICar extends Product, Vehicle {
    type: string,
    model: string,
} 

const ICar1: ICar = {
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