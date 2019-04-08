// create promise
// var promise = new Promise(callback);
var promise = new Promise((resolve, reject)=>{
    resolve('Success');
    // OR
    reject('Error');
});
promise.then(
    function(success){
        console.log(success);
    },
    function(error){
        console.log(error);
    })
     .then(()=>console.log('promise chains'))
     .then(()=>console.log('promise chains'))
     .then(()=>console.log('promise chains'))    
     .catch(
    function(mes){
    console.log('Catch!');
    }
)
