class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is:${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const Jhon = new User("jhon");
// console.log(Jhon.createId());
// but if dont want everyone to have this method of special id we can use keyword ==>>static in class behind createid method
//now if log again we get error means jhon dont have the access to craeteid method
//  even this will not available to class extends from user see

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const mark = new Teacher("mark", "me@fb.com");
mark.logMe();
//Username is:mark
// waht about creat id method
console.log(mark.createId());
// again it is not available
