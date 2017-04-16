// singleton
function Config(){

  // check does Config has instance property
  if( typeof Config.instance === 'object' ){
    return Config.instance; // return if !!instance
  }

  this.someOption = 'Some option';

  // save instance for repeat use
  Config.instance = this;

}


// check our pattern

var conf1 = new Config();
var conf2 = new Config();

console.log( conf1 === conf2);