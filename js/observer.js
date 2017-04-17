// observer
// This is a very simple example
function Observable(){

  // array of observers
  var observers = [];

  // Notify method. This method notify all observers, that subscribed on this event.
  this.sendMessage = function( params ){

    observers.map(function( obs ){
      obs.notify( params );
    })

  };

  // Add ( subscribe ) new observer
  this.subscribe = function( obs ){
    observers.push( obs );
  };

}

// observer
function Observer( behavior ){

  this.notify = function( params ){

    behavior( params );

  }

}

// create new Observable
var observable = new Observable();


// create new Observers with different handlers
var observer_1 = new Observer( function( params ){
  console.log( 'Observer_1 ', params );
});
var observer_2 = new Observer( function( params ){
  console.log( 'Observer_2 ', params );
});

// subscrib our observers to observable obj
observable.subscribe( observer_1 );
observable.subscribe( observer_2 );


// call sendMessage method
setTimeout(function(){
  observable.sendMessage(new Date());
}, 4000);