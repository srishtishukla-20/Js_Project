function display(num){
    document.getElementById("screen").value+=num;
}
function compute(){
    let x=document.getElementById("screen").value;
    let y=eval(x);
    document.getElementById("screen").value=y;
}
function clear(){
    document.getElementById("screen").value="";
}
// eval is function which calculates numbers








































    