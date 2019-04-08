function sum(a, b, cb){
    var result = 0;
    setTimeout(()=>{
        result = a + b;
        console.log("timeout excuted!");
        cb(result);
    },1000)
     
    return result;
};

function main(){
    var res = sum(1,2,(data)=>{
        console.log(data);
    });
    console.log('start');
    

};

main();

// // function callBack(data){
// //     console.log(data);
// // }
// main();

//vidu khac

// downloadPhoto('http://gido.com/...', handlePhoto)

// function handlePhoto (error, photo) {
//   if (error) console.error('Download error!', error)
//   else console.log('Download finished', photo)
// }

// console.log('Download started')
// lam 2 ham sum: sum1 in ra file 1.txt, sum2 in ra 2.txt, sum3 doc tu 1.txt va 2.txt de ra 3.txt