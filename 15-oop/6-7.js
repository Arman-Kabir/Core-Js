/**
    #6-
    Class Inheritance also known as subclasses
    * Subclasses are classes which inherit functionality from another class also have additional properties and methods..
    * a subclass extends another class.
    
    **If the extended class doesn't have a constructor,then it will look for class it extends from and call that class's constructor.
      
    * properties are defined in the constructor inside a class

    * When constructor in child class doesn't exist - constructor in parent class is called.

    ** When constructor in child class needs properties from parent class - it needs to call super() inside it's constructor

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

class Admin extends User {
    constructor(username,email,title){
        super(username,email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter((u) => {
            return u.username !== user.username;
        })
    }
} 

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const userThree = new Admin('shaun', 'shaun@gmail.com','great');

console.log(userThree);

let users = [userOne, userTwo, userThree];

console.log(users);

userThree.deleteUser(userTwo);
// userOne.deleteUser(userThree);


console.log(users);