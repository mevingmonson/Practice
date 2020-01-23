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

function isFullAge(limit, el) {
    return el >= limit;
}

// function isFullAge(el) {
//     return el >= 18;
// }

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

var japanAges = arraryCalc(ages, isFullAge.bind(this, 20));
console.log('Japan Ages');
console.log(japanAges);


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

console.log('Immediately Invoked Functions Expression (IIFE)');

(function () {
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5);
})();

(function (point) {
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= point);
})(5);


console.log('Closures');

function retirement(retirementAge) {
    var a = 'years left until retirement';
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

var retirementUS = retirement(67);
retirementUS(1990);

var retirementIND = retirement(66);
retirementIND(1995);

retirement(65)(1993);


console.log('Call, Apply and Bind methods');

var johny = {
    name: 'John',
    age: 46,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ' My name is ' + this.name + '.' + 'I am ' + this.age + 'year\'s old.');
        }
        else if (style === 'casual') {
            console.log('What\'s up!? I\'m ' + this.name + '.' + 'I am ' + this.age + 'year\'s old.' + 'Have a nice ' + timeOfDay);
        }
    }
};

johny.presentation('formal', 'Morning');

var soumya = {
    name: 'Soumya',
    age: 24,
    job: 'Painting'
};

johny.presentation.call(soumya, 'casual', 'evening');

var johnyFormal = johny.presentation.bind(johny, 'formal');
johnyFormal('Afternoon');
johnyFormal('Evening');

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


var Question = function (ques, option, ans) {
    this.ques = ques;
    this.option = option;
    this.ans = ans;

}

Question.prototype.optionAnswers = function (selOption) {
    if (this.option[selOption] === this.ans) {
        console.log('Correct Answer');
    }
    else {
        console.log('Incorrect Answer');
    }
};

var q0 = new Question('Which is the capital of India?', ['Kochi', 'Delhi', 'Mumbai'], 'Delhi');
var q1 = new Question('Who is the President of India?', ['Ram Nath Kovind', 'Pratibha Patil', 'A. P. J. Abdul Kalam'], 'Ram Nath Kovind');

var quizSet = [q0, q1];

console.log('Quiz Time');
// quiz();

// function quiz() {

// }

(function () {
    var num = Math.floor(Math.random() * 2);
    console.log('Number is ' + num);
    if (num === 0) {
        console.log(quizSet[num].ques);
        console.log(quizSet[num].option);
    }
    else {
        console.log(quizSet[num].ques);
        console.log(quizSet[num].option);
    }
    var selOption = prompt('Which is the correct answer?');
    quizSet[num].optionAnswers(selOption);
})();

