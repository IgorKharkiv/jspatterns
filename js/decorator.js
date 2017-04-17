// Decorator pattern

// Basic abstract class
function Basic () {
  this.get = function(){
    console.log(' This is Basic class ');
  }
}

// Basic decorator class
function Decorator( obj ){
  this._obj = obj;
}
Decorator.prototype = Object.create( Basic.prototype );
Decorator.prototype.constructor = Decorator;

// new Decorator B
function DecoratorB( obj ){
  Decorator.call(this, obj);
  this._obj = obj;
  this.get = function(){
    this._obj.get();
    console.log(' This Decorator B class');
  }
}
DecoratorB.prototype = Object.create( Decorator.prototype );
DecoratorB.prototype.constructor = DecoratorB;

// new Decorator C
function DecoratorC( obj ){
  Decorator.call(this, obj);
  this.get = function(){
    this._obj.get();
    console.log(' This Decorator C class');
  }
}
DecoratorC.prototype = Object.create( Decorator.prototype );
DecoratorC.prototype.constructor = DecoratorC;

// create new obj with different mix of Decorators
var obj1 = new Basic(),
    obj2 = new DecoratorB( new Basic() ),
    obj3 = new DecoratorC( new Basic() ),
    obj4 = new DecoratorC( new DecoratorB( new Basic() ) );

    obj1.get();
    console.log('<<<<<<<<>>>>>>>>');
    obj2.get();
    console.log('<<<<<<<<>>>>>>>>');
    obj3.get();
    console.log('<<<<<<<<>>>>>>>>');
    obj4.get();
    console.log('<<<<<<<<>>>>>>>>');