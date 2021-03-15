module.exports = function reverse (n) {
if(n<0){
    n=-1*n;
}
var arr=[];
do{
    var mod=n%10;
    arr.push(mod);
    n=Math.floor(n/10);
}
while(n>0);
return arr.join('');
}
