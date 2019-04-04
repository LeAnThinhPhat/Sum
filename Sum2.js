var fs = require('fs');
function sum(a, b, cb){
    var result = 0;
    setTimeout(()=>{
        result = a + b;
        console.log("timeout excuted!");
        cb(result);
    },3000)
     
    return result;
};

function main(){
    var res = sum(2,2,(data)=>{
        console.log(data);
        
            fs.writeFile('./ketqua2.txt', data, (err)=>{
                if(err) throw err;                  
                console.log('Finish'); 
            });
    });
    console.log('Start');
    

};

main();