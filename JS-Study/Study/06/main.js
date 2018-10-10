var dateNow = new Date();

console.log('Now', dateNow)

var year = dateNow.getFullYear();
var months = dateNow.getMonth();
var date = dateNow.getDate();
var day =  dateNow.getDay();

console.log('year',year)
console.log('months', months); // начинается с 0
console.log('date', date);
console.log('day', day); // начинается с 0 - воскресение

function getDayName(day) {
    var dayNames = ['вс', 'пн', 'вт', 'cр', 'чт', 'пт', 'сб'];

    return dayNames[day];
}

console.log(getDayName(day))

function addZero(date) {
    if (date < 10) {
        return '0' + date;
    }

    return date;
}

dateNow.setDate(dateNow.getDate() + 15);

var newDate = dateNow.getDate();

console.log('after 7', dateNow);

var format = addZero(newDate) + '-' + months + '-' + year;
console.log('format', format)

var isoFormat = dateNow.toISOString();
console.log('ISO Format', isoFormat)
var yearFromISO = new Date(isoFormat);
console.log('yearFromISO', yearFromISO.getFullYear());

var findDayBirth = new Date(1988, 11, 22);
console.log(findDayBirth)

var findDayBirthFuture = new Date(2017, 11, 22);
console.log(findDayBirthFuture)

console.log('Miliseconds', Date.now())
console.log('Miliseconds', new Date().getTime())

var now1 = new Date();
var old1 = new Date(1988, 11, 22);
var result = now1 - old1;
console.log(result / 60 / 60 / 24 / 365 / 1000)
console.log(Math.ceil(result / 1000 / 365 / 24 / 60 / 60))