const myZodiac = [
    {
    name: 'Козерог', symbol: '♑️', element: 'Земля',
    startMonth: 12, startDay: 22, endMonth: 1, endDay: 19,
    desc: 'Практичный, целеустремлённый и дисциплинированный. Умеет достигать больших высот упорным трудом.'
    },
    {
    name: 'Водолей', symbol: '♒️', element: 'Воздух',
    startMonth: 1, startDay: 20, endMonth: 2, endDay: 18,
    desc: 'Независимый, оригинальный и гуманный. Смотрит в будущее и ценит свободу мышления'
    },
    {
    name: 'Рыбы', symbol: '♓️', element: 'Вода',
    startMonth: 2, startDay: 19, endMonth: 3, endDay: 20,
    desc: 'Интуитивный, сострадательный и мечтательный. Обладает глубокой внутренней жизнью.'
    },
    {
    name: 'Овен', symbol: '♈️', element: 'Огонь',
    startMonth: 3, startDay: 21, endMonth: 4, endDay: 19,
    desc: 'Энергичный, смелый и инициативный. Первый во всём, настоящий лидер.'
    },
    {
    name: 'Телец', symbol: '♉️', element: 'Земля',
    startMonth: 4, startDay: 20, endMonth: 5, endDay: 20,
    desc: 'Надёжный, терпеливый и чувственный. Ценит красоту, комфорт и стабильность.'
    },
    {
    name: 'Близнецы', symbol: '♊️', element: 'Воздух',
    startMonth: 5, startDay: 21, endMonth: 6, endDay: 20,
    desc: 'Любознательный, общительный и адаптивный. Быстро усваивает новые идеи и умеет говорить.'
    },
    {
    name: 'Рак', symbol: '♋️', element: 'Вода',
    startMonth: 6, startDay: 21, endMonth: 7, endDay: 22,
    desc: 'Заботливый, чуткий и привязанный к дому. Обладает сильной интуицией и богатым внутренним миром.'
    },
    {
    name: 'Лев', symbol: '♌️', element: 'Огонь',
    startMonth: 7, startDay: 23, endMonth: 8, endDay: 22,
    desc: 'Великодушный, харизматичный и творческий. Рождён для сцены и любит быть в центре внимания.'
    },
    {
    name: 'Дева', symbol: '♍️', element: 'Земля',
    startMonth: 8, startDay: 23, endMonth: 9, endDay: 22,
    desc: 'Аналитический, внимательный к деталям и трудолюбивый. Стремится к совершенству во всём.'
    },
    {
    name: 'Весы', symbol: '♎️', element: 'Воздух',
    startMonth: 9, startDay: 23, endMonth: 10, endDay: 22,
    desc: 'Дипломатичный, справедливый и изящный. Ищет гармонию и красоту во всём.'
    },
    {
    name: 'Скорпион', symbol: '♏️', element: 'Вода',
    startMonth: 10, startDay: 23, endMonth: 11, endDay: 21,
    desc: 'Интенсивный, проницательный и страстный. Глубоко чувствует и редко забывает.'
    },
    {
    name: 'Стрелец', symbol: '♐️', element: 'Огонь',
    startMonth: 11, startDay: 22, endMonth: 12, endDay: 21,
    desc: 'Оптимистичный, искренний и любящий приключения. Вечный искатель смысла и новых горизонтов.'
    }
]
document.getElementById('button-zodiac').addEventListener('click', search)

function search(){
    let monthBirth = document.getElementById('month').value
    let birthDay = document.getElementById('day').value

    let zodiacSym = document.getElementById('sym')
    let zodiacName = document.getElementById('sname')
    let zodiacElement = document.getElementById('selement')
    let zodiacDesc = document.getElementById('sdesc')

    if(monthBirth === '' || birthDay === ''){
    document.getElementById('err').style.display = 'block'
    document.getElementById('err').textContent = 'Строки не должны быть пустые!'
    document.getElementById('err').style.color = 'red'
    return
    }
    monthBirth = Number(monthBirth)
    birthDay = Number(birthDay)

    if(birthDay < 1 || birthDay > 31){
        document.getElementById('err').style.display = 'block'
        document.getElementById('err').textContent = 'День должен быть от 1 до 31'
        document.getElementById('err').style.color = 'red'
        return
    }


let myInfo = null
myZodiac.forEach(el => {
    if(monthBirth === el.startMonth && birthDay >= el.startDay || monthBirth === el.endMonth && birthDay <= el.endDay){
    myInfo = el
    }
})
if(myInfo){
document.getElementById('result').style.display = 'block'
    zodiacSym.textContent = myInfo.symbol
    zodiacName.textContent = myInfo.name
    zodiacElement.textContent = myInfo.element
    zodiacDesc.textContent = myInfo.desc
}
}
