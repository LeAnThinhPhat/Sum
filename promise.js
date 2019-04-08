// create promise
// var promise = new Promise(callback);
var promise = new Promise((resolve, reject)=>{
    resolve('Success');
});
promise.then(
    function(success){
        console.log(success);
    },
    function(error){
        console.log(error);
    }
).catch(
    function(mes){
    console.log('Catch!');
    }
)
