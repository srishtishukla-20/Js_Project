let n=require("readline-sync")
let num=n.questionInt("enter prime number")
let i=2;
let x=0;
while(i<=num){
    let j=1;
    let count=0;
    while (j<=i){
        if (i%j==0){
            count+=1
        }
        j+=1
    }

    if (count==2){
        x+=1
    }
    i=i+1
}
console.log("your prime number position is",x)

