/**
 * Classes
 * instance
 */

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.lateCommings = 0;
    this.scores = [];
  }
  fullName() {
    return `full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.lateCommings += 1;
    if (this.lateCommings >= 3) {
      return "you are expelled";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.lateCommings}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvarage() {
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    });
    return sum / this.scores.length;
  }

  static entrollStudents() {
    //utility function
    return "Entrolling Students";
  }
}

let firstStudent = new Student("praveen", "kumar", 2023);
let secondStudent = new Student("pranay", "kumar", 2023);

console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.addScore(12));
console.log(firstStudent.addScore(10));
console.log(firstStudent.calculateAvarage());
//console.log(firstStudent.scores)

//
//console.log(firstStudent.entrollStudents())    // gives us error because static method will not work on instance // Static properties cannot be directly accessed on instances of the class
console.log(Student.entrollStudents()); //they're accessed on the class itself.
