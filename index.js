function receivesAFunction (cb) {
  console.log(cb());
}
receivesAFunction(function () { return "Hello"});

function returnsANamedFunction(){
  return function receivesAFunction() {
  }
}

function returnsAnAnonymousFunction(){
  return function (){};
}