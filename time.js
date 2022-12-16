var toda1=new Date().getTime();
console.log(toda1);
for(let i=0;i<1000;i++){
    console.log("Hello");
}
var toda2=new Date().getTime();
console.log(toda2);

console.log((toda2-toda1)/1000);