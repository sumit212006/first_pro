/// this for of loop are use string
let language="javascript";

let text="";
for(let x of language){
    text +=x+ "<br>";
    document.getElementById("demo").innerHTML=text;
  

}