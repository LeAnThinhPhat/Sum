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
    var res1 = sum(1,2,(data)=>{
        console.log(data);
            fs.writeFile('./ketqua1.txt', data, (err)=>{
                if(err) throw err;                  
                console.log('Finish1'); 
            });
    });
    var res2 = sum(2,2,(data)=>{
        console.log(data);
            fs.writeFile('./ketqua2.txt', data, (err)=>{
                if(err) throw err;                  
                console.log('Finish2'); 
            });
    });
    fs.readFile('./ketqua1.txt', 'utf8', (err,data1)=>{
        if(err) throw err;
        fs.readFile('./ketqua2.txt', 'utf8', (err,data2)=>{
            if(err) throw err;
            var res3 = sum(parseInt(data1),parseInt(data2),(data)=>{
                console.log(data);
                    fs.writeFile('./ketqua3.txt', data, (err)=>{
                        if(err) throw err;                  
                        console.log('Finish3'); 
                    });
            });
        })
    })
    console.log('Start');
};

main();