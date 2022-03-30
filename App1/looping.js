class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static users = [
        { id: 1, name: "ABC" },
        { id: 2, name: "ANGCHOR" },
        { id: 3, name: "TIEGOR" },
    ];

    static foods() {
        const foods = [
            "Nooddle",
            "Egg",
            "Cake",
        ];
        return foods;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} - ${this.age}`);
    }

}

const otto = new Person('Nget Tim', 26);
otto.introduce();
// get user from person class
const getUsers = Person.users;
for (var i in getUsers) {
    console.log(getUsers[i].name);
}

// get foods from public static method in person class
const getFoods = Person.foods();
for (var j of getFoods) {
    console.log(j);
}

// new object testing
const Car = (function() {
    myCar = {};

    myCar.Users = (newUser) => {

        const users = [
            { id: 1, name: "Jonh" },
            { id: 2, name: "Tim" },
            { id: 3, name: "Jam" },
        ];
        if (newUser) {
            users.push(newUser);
        }
        return users;
    }
    return myCar;
})();
const newUser = [
    { id: 4, name: "Ben" },
    { id: 5, name: "Bora" }
];

const getUsersFromCar = Car.Users(newUser);
for (var a in getUsersFromCar) {
    console.log(getUsersFromCar[a]);
}