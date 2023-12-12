/**#8
    ** class syntax in js is syntactic sugar cz js as a language doesn't have classes built into it.
    Instead, it uses a prototype model to implement the same kind of behavior.

    ** In a class - constructor function is responsible for setting up the object, applying the properties to it and setting the value of those properties.

    ------------------------------------------
    Defining method inside constructor - it's better to add them onto the prototype.
    --------------------------------------------------------
    *****Prototypes ********
    * Every object in js has a prototype
    * prototype contain all the methods for that object type

 */

function User(username, email) {
    this.username = username;
    this.email = email;
    // this.login = function(){
    //     console.log(`${this.username} has logged in`);
    // }  
}

User.prototype.login = function () {
    console.log(`${this.username} has logged in`);
    return this;
}
User.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
    return this;
}

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

// console.log(userOne, userTwo);
// userOne.login().logout().login();
// userOne.logout();