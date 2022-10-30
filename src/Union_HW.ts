// Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.

// Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level 
// и новый уровень. В теле функции для полученного объекта должен назначаться следующий уровень.

type Level = 'junior' | 'middle' | 'senior';
 
interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}

// выше в интерфейсе Девелопера мы устанавливаем тип для level'a как unoin Level,
// который имеет три в нашем случае заданных варианта 

function gradeDeveloper (user: {level:Level}, newLevel: Level) {
    user.level = newLevel
}

// здесь мы назначаем переменную user - как данные из нашего интерфейса и создаем новую переменную newLevel
// которая имеет тот же union тип как и в нашем интерфейсе Level

const dev1:Developer={
    level: 'junior',
    login: 'proha0230',
    skills: ['HTML', 'CSS', 'JS', 'TS'],
}

gradeDeveloper(dev1, 'middle')