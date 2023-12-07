/*1
    Object - It can have properties like a lens and it can have methods to things it can do.

    Array in js is a type of object in js
    Any methods that a particular object has access to are listed inside it's ---> __proto__ property

    When we see " new " somewhere -> we know we need to create some kind of object.

    const ages = new Array(10,20,30);  This is array constructor. TO create array
    
    literal syntax like curly braces --> {}

    * Many data types in js are not objects --> strings, numbers, booleans, null, undefined all the primitive types don't fall under the object category. But, js wraps the primitive value into a wrapper object and uses properties and methods on the object. null and undefined don't have access to any properties and methods. 



*/

/**#4
 * Constructor function construct our object and sets the properties on it.
 * ** 'this ' keyword refers to the current object in a method or constructor.
 *
    // the 'new'  keyword - to create new object
    // 1 - it creates a new empty object {}
    // 2 - it binds the value of 'this' to the new empty object.
    // 3 - it calls the constructor function to 'build' the object

    **The instance refers to individual object that we actually create using a class.
 * 
 */

/**#5
  
 
 */
class User {
    constructor(username,email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score  = 0;
    }

    login(){
        console.log(`${this.username} just logged in`);
    }
    logout(){
        console.log(`${this.username} just logged out`);
    }
    incScore(){
        this.score  +=1;
        console.log(`${this.username} has a score of ${this.score}`);
    }
}

const userOne = new User('mario','mario@g.com');
const userTwo = new User('luigi','luigi@g.com');

console.log(userOne,userTwo);
userOne.incScore();
userOne.incScore();
