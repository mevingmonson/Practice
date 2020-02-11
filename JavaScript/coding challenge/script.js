class Parks {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    getDetails(noOfTrees, parkArea) {
        this.noOfTrees = noOfTrees;
        this.parkArea = parkArea;
        this.age = new Date().getFullYear() - this.buildYear;
    }

    treeDensity() {
        console.log(`${this.name} has tree density = ${this.noOfTrees / this.parkArea}`);
    }

    MoreThanThousand() {
        if (this.noOfTrees > 1000) {
            console.log(`${this.name} has more than 1000 trees!`);
        }
    }
}

const lillyPark = new Parks('Lilly', 1965);
lillyPark.getDetails(1200, 8);

const rosePark = new Parks('Rose', 1990);
rosePark.getDetails(390, 6);

const daisyPark = new Parks('Daisy', 1995);
daisyPark.getDetails(450, 7);


//var sumOfAllAges = lillyPark.age + rosePark.age + daisyPark.age;
var sumOfAllAges = 0;

let parkArray = [lillyPark, rosePark, daisyPark];

for (const current of parkArray) {
    current.treeDensity();
    sumOfAllAges += current.age;
    if (current.noOfTrees > 1000) {
        console.log(`${current.name} has more than 1000 trees!`);
    }
}

console.log(`Our 3 parks has an average age of ${AverageAge(sumOfAllAges)}`);

function AverageAge(sumOfAllAges) {
    return sumOfAllAges / 3;
}



class Streets extends Parks {
    constructor(name, buildYear, length = 2, size) {
        super(name, buildYear);
        this.length = length;
        this.classification = 'normal';
    }

    sizeClassificatioin() {
        if (this.length <= 2) {
            this.classification = 'Tiny';
        }
        else if (this.length > 2 && this.length <= 4) {
            this.classification = 'Small';
        }
        else if (this.length > 4 && this.length <= 6) {
            this.classification = 'Normal';
        }
        else if (this.length > 6 && this.length <= 8) {
            this.classification = 'Big';
        }
        else if (this.length > 8 && this.length <= 10) {
            this.classification = 'Huge';
        }
    }
}

const MevinStreet = new Streets('MevinStreet', 1995);
const SabuStreet = new Streets('SabuStreet', 1980, 8)
const ShibuStreet = new Streets('ShibuStreet', 2001, 3);
const RinkuStreet = new Streets('RinkuStreet', 1996, 9);

let streetArray = [MevinStreet, SabuStreet, ShibuStreet, RinkuStreet];

let totalLength = 0;
for (const current of streetArray) {
    totalLength += current.length;
    current.sizeClassificatioin();
    console.log(`${current.name} built in ${current.buildYear} is a ${current.classification} street`);
}

console.log(`Our streets have total length of ${totalLength} with average length of ${totalLength / 4}`);