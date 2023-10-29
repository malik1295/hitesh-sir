class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is:${this.username}`);
  }
}

//Suppose if u are making an lms system so we need to make this user teacher or admin student so for this we form more classes bur that will inherit this class also uecause even if it is teacher or admin he will need name so
// to inherit user class we use the keyword extends which will inherit user class in teacher class
//==>>extends is syntactic sugar for prototype that we used previously

class Teacher extends User {
  constructor(username, email, password) {
    //for user name we previusly used call(this,username) 😥 remember? But NOT NOW 😍😍 in classes we use only Super() and everything work like we used to do behind the scene
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@me.com", "123");
chai.addCourse();

const masalaChai = new User("tasteness cahi");
// to confirm check logme method that is in User
masalaChai.logMe(); //and it iss
// to check if chai is the instance of Teacher
console.log(chai instanceof Teacher); // true
