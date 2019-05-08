

var x = document.getElementById("x");
var y = document.getElementById("y");
var secret = document.getElementById("secret");
var UITKOMST = document.getElementById("UITKOMST");

x.onclick = function(){
    
    if (x.value == secret.value){
        console.log("goed");
        UITKOMST.innerHTML= "GOED";
    }else 
    {
        console.log("fout");
        UITKOMST.innerHTML= "FOUT"
    }
}

y.onclick = function(){
    if (y.value == secret.value){
        console.log("goed");
        UITKOMST.innerHTML= "GOED"; 
    }else{
        console.log("fout");
        UITKOMST.innerHTML= "FOUT"
    }

}
//console.log(x.type);
    // console.log(secret.value);