var fs = require('fs');
function sum(a, b , cb){
    var result = 0;
    setTimeout(()=>{
        result = a + b;
        console.log("timeout excuted!");
         cb(result);
    },3000)
     
    return result;
};

 function main(){
     fs.readFile('./ketqua1.txt', 'utf8', (err,data1)=>{
         if(err) throw err;
         fs.readFile('./ketqua2.txt', 'utf8', (err,data2)=>{
             if(err) throw err;
             var res = sum(parseInt(data1),parseInt(data2),(data)=>{
                 console.log(data);
                     fs.writeFile('./ketqua3.txt', data, (err)=>{
                         if(err) throw err;                  
                         console.log('Finish'); 
                     });
             });
         })
     })
     console.log('Start');
 };

main();