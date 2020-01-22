//Function Constructor

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
};

var john = new Person('John', 1992, 'Painter');
var mary = new Person('Mary', 1995, 'Chef');

var age1 = 17;
var obj1 = {
    name: 'mevin',
    city: 'Chennai'
};

function change(para1, para2) {
    age1 = para1;
    para2.city = 'Kottayam';
}

var age2 = age1;
change(30, obj1);


console.log(age1);
console.log(age2);
console.log(obj1.city);

console.log('Functions')

var years = [1990, 1995, 1987, 2001, 1980];

function arraryCalc(arr, fn) {
    var array = [];
    for (i = 0; i < arr.length; i++) {
        array.push(fn(arr[i]));
    }
    return array;
}

function calcAges(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function heartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arraryCalc(years, calcAges);
console.log(ages);

var fullAges = arraryCalc(ages, isFullAge);
console.log(fullAges);

var rates = arraryCalc(ages, heartRate);
console.log(rates);


console.log('Functions Returning Functions');

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', explain what UX design is?');
        }
    }
    else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?');
        }
    }
    else {
        return function (name) {
            console.log(name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('SamMon');

var designerQuestion = interviewQuestion('designer');
designerQuestion('ChinjuMol');

var unknownQuestion = interviewQuestion('painter');
unknownQuestion('ShibuMon');

interviewQuestion('teacher')('TintuMon');
interviewQuestion()('MinnaMol');
