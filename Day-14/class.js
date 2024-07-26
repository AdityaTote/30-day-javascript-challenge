// Day-14: Class

// Activity-1: Class defination

// Task-1-2: Class defcration and updating properties

class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    greetingOne(){
        return `Hello ${this.name}, Wlc`
    }

    get greetingTwo(){
        return `Hello ${this.name}, Wlc`
    }

    updateAge(updatedAge){
        this.age = updatedAge
    }
    get newAge(){
        console.log("Age:",this.age);
    }
}
const person = new Person("John", 26)

const funOne = () => {
    console.log(person.greetingOne());
    console.log(person.greetingTwo);
    console.log(person.updateAge(6));
    console.log(person.newAge);
}

// Activity-2: Class Inheritance

// Task-3-4: Extending class and overriding properties.
class Student extends Person{
    constructor(name,studentId){
        super(name),
        this.studentId = studentId
    }

    Id(){
        return `StudentId: ${this.studentId}`;
    }

    greeting(){
        return `${super.greetingTwo} my student id is : ${this.studentId} `;
    }
}
const student = new Student("John",55)
const funTwo = () => {
    console.log(student.Id());
    console.log(student.greeting());
}

// Activity-3: Static and its Properties

// Task-5-6: Add static property and log gretting and inherite
class PersonOne{
    static name = "John";
    static age = 21
    static info(){
        return `Name: ${PersonOne.name}, Age: ${PersonOne.age}`
    }
}

const funThree = () => {
    console.log(PersonOne.info());
}

class StudentOne extends PersonOne{
    static studentCount = 0
    constructor(name){
        super(name)
        StudentOne.studentCount ++
        this.id = StudentOne.studentCount;
    }

    getTotalStudent(){
        return `${StudentOne.studentCount}`
    }
}
const student1 = new StudentOne("John")
const student2 = new StudentOne("Joffery")
const funFour = () => {
    console.log(student1.getTotalStudent());
    console.log(student2.getTotalStudent());
}


// Activity-4: Getter and Setter method

// Task7-8: Using getter and setter
class PersonTwo{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get display(){
        return `${this.firstName}${this.lastName}`
    }

    set value(firstName){
        this.firstName = firstName;
    }
}

const p1 = new PersonTwo("John","Snow")
const funFive = () => {
    console.log(p1.display);
    p1.firstName = "Tyrion"
    console.log(p1.display);
}