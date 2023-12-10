/*1
    Object - It can have properties like a lens and it can have methods to things it can do.

    Array in js is a type of object in js
    Any methods that a particular object has access to are listed inside it's ---> __proto__ property

    When we see " new " somewhere -> we know we need to create some kind of object.

    const ages = new Array(10,20,30);  This is array constructor. TO create array
    
    literal syntax like curly braces --> {}

    * Many data types in js are not objects --> strings, numbers, booleans, null, undefined all the primitive types don't fall under the object category. But, js wraps the primitive value into a wrapper object and uses properties and methods on the object. null and undefined don't have access to any properties and methods. 

    #3
    A class is like a blueprint for an object( It describes how one should be made). It describes how to create one with all of its base properties and functionality.

*/

/**#4
 * Constructor function construct our object and sets the properties on it.
 * ** 'this ' keyword refers to the current object in a method or constructor.
 *
    // the 'new'  keyword - to create new object
    // 1 - it creates a new empty object {}
    // 2 - it binds the value of 'this' to the new empty object.
    // 3 - it calls the constructor function to 'build' the object

    **When we create object using class, we say we are creating an instance of class
    **The instance refers to individual object that we actually create using a class.
 * 
 */

/**#5
  **When a js method doesn't explicitly return a value, automatically js assigns the return value to be undefined..
  * this refers ot the object instance
 
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

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

console.log(userOne, userTwo);

userOne.login().incScore().incScore().logout();

// userOne.incScore().incScore();
// userOne.incScore();
