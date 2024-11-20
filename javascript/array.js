
//// array length method
const len=["sumit","ram","vashuk","ankush"];
let size=len.length;
console.log(size);

////  array to string method

let string=["banana","apple","mango"];
let st=string.toString();
console.log(st);

/// array at method

var a=["name","lname","fname"];
let t=a.at(1);
console.log(t);

///////////////////////////////////////////////////////////

/// array join method
let l=["first","second","third"];
let ni= l.join(",")
console.log(ni);

/////////////////////////////////////

//// array pop method
let po=["banana","apple","mango"];
po.pop();
console.log(po);

//////////////////////////////////////

////array push method
let pus=["banana","mango","apple"];
pus.push("sweet");
console.log(pus);

///////////////////////////////
//// push another array

let pu=["banana","mango","apple"];
let d=[];
for (let i=0;i<pu.length;i++) {
      d.push(pu[i]);
        
    } 
    console.log(d)

/////////////////////////////////////////////
/// array shift method
let r=["bmw","shift","baleno"];
r.shift()
console.log(r);

//////////////////////////////////////
//// array unshift method
let un=["bmw","shift","baleno"];
un.unshift("neno");
console.log(un);
////////////////////////////
//////array delete method
let ar=["bmw","shift","baleno"]
delete ar[2];
console.log(ar);
///////////////////////////////////////////////////

////array concat method
let con=["sumit"];
let cat=["dixit"];

let c=con.concat(cat);
console.log(c);
/////////////////////////////////////////////////////

//////array copywithin method
let copy=["bmw","shift","baleno"]
copy.copyWithin(0,1);
console.log(copy);

/////////////////////////////////
///array splice method
let sp=["my","sumit","dixit"];
sp.splice(1,0,"name","is");
console.log(sp);
///////////////////////////////////////

///array tosplice method
let tsp=["my","sumit","dixit"];
let spliced=tsp.toSpliced(0,1);
console.log(spliced);
//////////////////////////
////array slice meythod
let





