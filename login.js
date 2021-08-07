const username=document.querySelector("#input1");
const password=document.querySelector("#input2");
const form=document.querySelector("#form");
form.addEventListener("submit",(e) => {
        if(username.value.trim()==""){
            e.preventDefault();
            document.querySelector("#content3").style.display="block";
            document.querySelector("#content5").style.display="none";
            document.querySelector("#content6").style.display="none";

            
        }
        if(username.value.trim().length<10){
            document.querySelector("#content3").style.display="block";
            document.querySelector("#content5").style.display="none";
            document.querySelector("#content6").style.display="none";
            alert("username value is lessthan 10");
            e.preventDefault();
            }
        if(username.value.trim().length>20){
            document.querySelector("#content3").style.display="block";
            document.querySelector("#content5").style.display="none";
            document.querySelector("#content6").style.display="none";
            alert("username value is morethan 20");
            e.preventDefault();
        }
        if(password.value.trim()==""){
            e.preventDefault();
            document.querySelector("#content3").style.display="block";
            document.querySelector("#content5").style.display="none";
            document.querySelector("#content6").style.display="none";
            document.querySelector("#content4").innerHTML='<a href="">Forgotten password?</a>';
        }
        
        if(password.value.trim().length<10){
            document.querySelector("#content3").style.display="block";
            document.querySelector("#content5").style.display="none";
            document.querySelector("#content6").style.display="none";
            alert("password value is lessthan 10");
            e.preventDefault();
        }
        if(password.value.trim().length>15){
            document.querySelector("#content3").style.display="block";
            document.querySelector("#content5").style.display="none";
            document.querySelector("#content6").style.display="none";
            alert("password value is morethan 15");
            e.preventDefault();
        }
        
})