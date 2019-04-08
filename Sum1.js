var fs = require('fs');
function sum(a, b){
    return new Promise((resolve, reject)=>{
        resolve(a+b);
    })
};

sum(1,2)
    .then((sum1) =>{
        fs.writeFile('./1.txt', sum1, (err)=>{
            if(err) throw err;                  
            console.log('Finish1'); 
        })
        return sum(2,2);
    }) 
    .then((sum2)=>{
        fs.writeFile('./2.txt', sum2, (err)=>{
            if(err) throw err;                  
            console.log('Finish2'); 
        })
        fs.readFile('./1.txt', 'utf8', (err,data1)=>{
            if(err) throw err;
            fs.readFile('./2.txt', 'utf8', (err,data2)=>{
                if(err) throw err;
                let a = parseInt(data1)
                let b = parseInt(data2)
                sum(a,b)
                .then((sum3)=>{
                    fs.writeFile('./3.txt', sum3, (err)=>{
                        if(err) throw err;                  
                        console.log('Finish3'); 
                    })
                })
            })
        })
    })
    console.log('Start');