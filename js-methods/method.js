const name = {
    firstName: "Rajesh",
    lastName: "Prajapati",
}

const printFullName = function (state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country)
}

printFullName.call(name, "Gujarat", "india");

printFullName.apply(name, ["Gujarat", "india"]); // apply takes second parameter sa an array list

const myName = printFullName.bind(name, "Gujarat", "india");
myName(); // bind does not invoke function directly 


