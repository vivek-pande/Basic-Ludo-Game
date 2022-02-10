function randomSelector(a,b){
   return Math.floor((Math.random()*(b-a))+a)
}

let y=randomSelector(1,7)
console.log('y :>> ', y);