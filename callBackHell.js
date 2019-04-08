//call back hell
// callback in callback
function thuc_day(viecnaodo){
    viecnaodo();
}

function danh_rang(viecnaodo){
    viecnaodo();
}

function di_an_sang(viecnaodo){
    viecnaodo();
}
// callback Hell
function main(){
    thuc_day(function(){
      console.log(1);
      danh_rang(function(){
        console.log(2);
        di_an_sang(function(){
          console.log(3);
        });
      });
    });
}
main();
// khac phuc
// 1 module
// 2 promise