// factory

// basic constructor
function User(){}

// parent method
User.prototype.fullInfo = function(){
  return 'Name ' + this.name + '  ' + 'Role ' + this.role;
};

// method of create new exemplar
User.create = function( role, name ){
  var _role = role,
      _name = name || 'No Name',
      newUser;

  // check of available necessary type
  if( !User[_role] ){
    // error message
    console.error('Error: Constructor role undefined!');
    return false;
  }

  // check if object  inherits parent constructor
  if( typeof User[_role].prototype.fullInfo !== 'function'){
    User[_role].prototype = new User();
  }

  //create new exemplar of object
  newUser = new User[_role](_name);

  return newUser;
};

User.Admin = function (name) {
  this.name = name;
  this.role = 'Admin'
};

User.Moderator = function (name) {
  this.name = name;
  this.role = 'Moderator'
};

User.SimpleUser = function (name) {
  this.name = name;
  this.role = 'Simple User'
};


// initialize some new objects
var admin = new User.create('Admin', 'Misha');
var moderator = new User.create('Moderator', 'Dima');
var simpleUser = new User.create('SimpleUser', 'Vasya');
var noname = new User.create('SimpleUser');

console.log(admin, moderator, simpleUser, noname);