class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    // return this._password.toUpperCase();
    //we can also do this
    return `${this._password}withme`;
  }
  set password(value) {
    //here value of password is set
    this._password = value;
  }
}

const hitesh = new User("me@Aitools.com", "abc");
// now u can get pasword as
console.log(hitesh.password); //123
console.log(hitesh.email);
// but some time we want that when someone get this password he get encrypted password or no access of password or customize code we use getters and setters for this
//we can set getter or setter on any property see above
//==>> get email() and set email() used to set properties
//==>> se we use exact names here but thy become function in getter and setters
//==>>in geter return by applying the propert u want to attach with value
//==>> in setter set the value equal to new variable such as this._email and use the same in getter
//==> if u dont do this there will be a race between constructor and setter to set the value so diiferent name like this._password will avoid this
//==>> dont return in setter

//======>>>>>>>OLD SYNTAX<<<<<=========//
//FUNCTION BASED
/*
function User(email, password) {
  this.email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return `${this._email}`;
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}123`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");
console.log(chai.email);
console.log(chai.password);
*/
