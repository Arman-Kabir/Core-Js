/**#8
    * super() calls the constructor of the parent class.
    ** class syntax in js is syntactic sugar cz js as a language doesn't have classes built into it.
    Instead, it uses a prototype model to implement the same kind of behavior.

    ** In a class - constructor function is responsible for setting up the object, applying the properties to it and setting the value of those properties.

    ------------------------------------------
    Defining method inside constructor - it's better to add them onto the prototype.
    --------------------------------------------------------
    *****Prototypes ********
    * Every object in js has a prototype
    * prototype contain all the methods for that object type
    
    *****prototypal inheritance *********
    

 */

function User(username, email) {
    this.username = username;
    this.email = email;
}
User.prototype.login = function () {
    console.log(`${this.username} has logged in`);
    return this;
}
User.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
    return this;
}

function Admin(username, email,title) {
    User.call(this,username, email);
    this.title = title;

}

Admin.prototype = Object.create(User.prototype);

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const userThree = new Admin('shaun', 'shaun@gmail.com','great');

// console.log(userOne, userTwo);
console.log(userThree);
// userOne.login().logout().login();
// userOne.logout();