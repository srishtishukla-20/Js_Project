let n=require("readline-sync")
let pos=n.questionInt("enter your position")
let i=2;
let x=1;
while(pos>=0){
    let j=1;
    let count=0;
    while (j<=i){
        if (i%j==0){
            count+=1
        }
        j+=1
    } 
    if (count==2){
        if (pos==x){
            console.log(i,"is prime number")
            break
        }
        x+=1
    }
    i=i+1
}

