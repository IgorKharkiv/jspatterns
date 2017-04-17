// Strategy pattern

var module = (function () {

  // empty strategy obj
  var strategy = {};

  return {
    // call strategy exec function
    exec : function(){
      strategy.exec();
    },

    // set strategy
    setStrategy: function(s){
      strategy = s;
    }
  }

}());

// abstract strategy obj
function Strategy(){};
Strategy.prototype.exec = function(){};

// Strategy1 class
function Strategy1(){};
Strategy1.prototype = Object.create( Strategy.prototype );
Strategy1.prototype.exec = function(){
  console.log( 'Strategy 1 log' );
};
// Strategy2 class
function Strategy2(){};
Strategy2.prototype = Object.create( Strategy.prototype );
Strategy2.prototype.exec = function(){
  console.log( 'Strategy 2 log' );
};


// set and call startegy
module.setStrategy( new Strategy1() );
module.exec(); // console 'Strategy 1 log'
module.setStrategy( new Strategy2() );
module.exec(); // console 'Strategy 2 log'