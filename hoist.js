// # 1
// GIVEN
console.log(hello);
var hello = 'world';
// !AFTER HOISTING
var hello;
console.log(hello); ///'returns undefined'
hello = 'hello';

// # 2
// GIVEN
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// !AFTER HOISTING
var needle;
needle = 'haystack';
test();

function test() {
    var needle = 'magnet';
    console.log(needle);
}


// # 3
// GIVEN
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// !AFTER HOISTING
var brendan;
brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);//logs 'only okay'
}
console.log(brendan);//logs 'super cool'
// # 4
// GIVEN
var food = 'chicken';
console.log(food);

function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// !AFTER HOISTING
var food;
food = 'chicken';
console.log(food);//logs 'chicken'
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);//logs 'half-chicken'
    var food = 'gone';
}

// # 5
// GIVEN
mean();
console.log(food);// logs undefined
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// !AFTER HOISTING
var mean;
mean();//runtime error
var mean = function () {
    var food;
    food = "chicken";
    console.log(food);// logs 'chicken'
    var food = "fish";
    console.log(food);// logs 'fish'
}
console.log(food);//logs undefined
// # 6
// GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// !AFTER HOISTING
var genre;
console.log(genre);//logs undefined
genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);//logs 'rock'
    var genre = "r&b";
    console.log(genre);//logs 'r&b'
}
rewind();
console.log(genre);//logs 'disco'
// # 7
// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// !AFTER HOISTING
var dojo;
dojo = "san jose";
console.log(dojo);//logs'san jose'
function learn() {
    dojo = "seattle";
    console.log(dojo);//logs'seattle'
    var dojo = "burbank";
    console.log(dojo);//logs 'burbank'
}
learn();
console.log(dojo); //logs ' 'san jose'

// # 8 NINJA
// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now"; 
    }
    return dojo;
} 
// !AFTER HOISTING
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    dojo.hiring = null;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";//error message because dojo is a dictionary under const
    }
    return dojo;
} 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));