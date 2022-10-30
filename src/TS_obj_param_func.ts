function printPoint (point:{x:string, y:string}):void {
    console.log(`Coordinate of the point is x: ${point.x} and y:${point.y}`)
}

// если переменные передаем через обьект то самый минимум переменных что учавствует в ф-ции должен быть в 
// этом обьекте.

const obj1 = {
    x:"1",
    y:"2",
}

printPoint(obj1)


// мы так же можем указать и не обязательные переменные которые не будут использованы в ф-ции.

const obj2 = {
    x:"1",
    y:"2",
    z: 4, // как эта переменная z: 4
}

printPoint(obj2)