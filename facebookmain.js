function down(){
    document.getElementById("a12").classList.toggle('active');
    document.querySelector("#a11 i").style.color="white";
}
function downelements(){
    document.getElementById("b5").classList.toggle('active');
    document.getElementById("b131").classList.toggle("active");
}
function down1(){
    document.getElementById("c5").classList.toggle('active');
}

const txt=document.querySelector("#e31");
txt.addEventListener("change",output);
function output(){
    document.querySelector("#e27").innerHTML=txt;
}


//jquery

$(document).ready(function(){
    $("#e3").keyup(function(){
        var a=$("this").text ();
        console.log(a);
    })
})