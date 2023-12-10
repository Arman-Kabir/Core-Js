/**
    #6-Class Inheritance also known as subclasses
    * Subclasses are classes which inherit functionality from another class also have additional properties and methods..
    * a subclass extends another class.
    
      
    



 */

class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
    deleteUser(){

    }
}

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const userThree = new Admin('shaun','shaun@gmail.com');

console.log(userThree);

let users = [userOne,userTwo,userThree];
console.log(users);

userThree.deleteUser(userTwo);