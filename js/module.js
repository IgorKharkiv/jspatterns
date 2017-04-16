// module

var Storage = (function () {

  // local variable inside our module this is example of closure
  var users = [];

  // return public methods with private variable
  return{

    //add user in storage
    addUser: function(user){
      users.push(user);
    },

    // log storage
    logAllUsers: function(){
      console.log( users );
    }

  }

}());

// create user 1
var user_1 = {
  name: 'Petya',
  role: 'User'
};

// create user 2
var user_2 = {
  name: 'Sasha',
  role: 'Admin'
};

//add users in storage and log this storage
Storage.addUser(user_1);
Storage.addUser(user_2);
Storage.logAllUsers();