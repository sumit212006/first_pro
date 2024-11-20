/// whoole square stare patern
// let text="";
// let num=5;
// for(let i=0;i<=num;i++){
//     for(let j=0;j<num;j++){

//     text +='*' ;
//     }
//     text+='\n'
// }
// console.log(text);

///////////////////////////////////////////////////////////////////

////right  star pattern

// let text="";
// let a=5;
// for (let i = 0; i <a; i++) {
//    for (let j = 0; j <i; j++) {
//       text+='*';
    
//    }
//     text+='\n';

// }
// console.log(text);
////////////////////////////////////////////////////////////////////////////////////

/////////////revere right

// let text="";
// let a=5;
// for (let i = 0; i <a; i++) {
//    for (let j = i; j <a; j++) {
//       text+='*';
    
//    }
//     text+='\n';

// }
// console.log(text);

///////////////////////////////////////////////////////////////////////////////////////////////
/////space star pattern

let text="";
let a=5;
let text1=";"
for (let i = 1; i <=a; i++) {
 for (let j = 5; j >=i; j--){
    
    text+=" ";

  
 }
 for (let k = 1; k<=i; k++) {
   text+='*';
   text1=text; 
 }
 text+='\n'; 
   }
    


console.log(text1+"");
