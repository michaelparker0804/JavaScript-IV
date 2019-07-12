// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        console.log("Hello my name is " + this.name + ", I am from " + this.location + ".");
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log("Today we are learning about " + subject + ".");
    }
    grade(student, subject) {
        console.log(student.name + " receives a perfect score on " + subject + ".");
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(this.name + " has submitted a PR for " + subject + ".");
    }
    sprintChallenge(subject) {
        console.log(this.name + " has begun sprint challenge for " + subject + ".");
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel) {
        console.log(this.name + " announces to " + channel + " @channel standy times!");
    }
    debugsCode(student, subject) {
        console.log(this.name + " debugs " + student.name + "'s code on " + subject + ".");
    }
}

//create sample objects

const mike = new Person({
    name: 'Mike',
    location: 'Hudson',
    age: 30
});

const micah = new Person({
    name: 'Micah',
    location: 'Hudson',
    age: 30
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 38,
    favLanguage: 'CSS',
    specialty: 'Design',
    catchPhrase: `Don't stop believing`
});

const harry = new Student({
    name: 'Harry',
    location: 'Hogwarts',
    age: 11,
    previousBackground: 'punching bag',
    className: 'Gryffindor',
    favSubjects: ['Defense Against the Dark Arts', 'Care of Magical Creatures']
});

const malfoy = new Student({
    name: 'Draco',
    location: 'Hogwarts',
    age: 12,
    previousBackground: 'richie rich',
    className: 'Slytherin',
    favSubjects: ['Potions', 'Lunch']
});

const jill = new ProjectManager({
    name: 'Jillian',
    location: 'Brewster, NY',
    age: 31,
    favLanguage: 'English',
    specialty: 'Basketball',
    catchPhrase: `Sayonara`,
    gradClassName: 'Class of 2006',
    favInstructor: 'Fred'
});

const joe = new ProjectManager({
    name: 'Joseph',
    location: 'Brewster, NY',
    age: 26,
    favLanguage: 'Python',
    specialty: 'Baseball',
    catchPhrase: `Adios`,
    gradClassName: 'Class of 2010',
    favInstructor: 'Wilma'
});


//test class methods

mike.speak();
fred.demo('React');
wilma.grade(harry, 'Defense Against the Dark Arts');
malfoy.listSubjects();
malfoy.PRAssignment('Maths');
harry.sprintChallenge('Javascript-II');
jill.standUp('webpt8_billy');
joe.debugsCode(malfoy, 'Phys. Ed.');
