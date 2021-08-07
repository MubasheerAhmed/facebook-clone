// js only for middle content

const form2=document.querySelector("#form2");
const firstname=document.querySelector("#input3");
const surname=document.querySelector("#input4");
const mobilenu=document.querySelector("#input5");
const newpass=document.querySelector("#input6");
var dateadd=document.querySelector("#select1");
const monthadd=document.querySelector("#select2");
const yearadd=document.querySelector("#select3");
const anyone1=document.querySelector("#anyone1");


// add elements in date;
for(let i=1;i<32;i++){
    const add=document.createElement("option");
    const value=document.createTextNode(i);
    add.appendChild(value);
    dateadd.appendChild(add);
}

for(let i=0;i<12;i++){
const arr=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
const add1=document.createElement("option");
const value1=document.createTextNode(arr[i]);
add1.appendChild(value1);
monthadd.appendChild(add1);
}

for(let i=2020;i>1900;i--){
    const add2=document.createElement("option");
    const value2=document.createTextNode(i);
    add2.appendChild(value2);
    yearadd.appendChild(add2);
}
console.log(dateadd.value);

//logic 

form2.addEventListener("submit",(e)=>{


        if(firstname.value.trim()==""){
            document.querySelector("#span1").style.visibility="visible";
            document.querySelector("#span7").style.visibility="visible";
            firstname.style.borderColor="red";
            e.preventDefault();
        }
        if(surname.value.trim()==""){
            document.querySelector("#span2").style.visibility="visible";
            document.querySelector("#span8").style.visibility="visible";
            surname.style.borderColor="red";
            e.preventDefault();
        }
        if(mobilenu.value.trim()==""){
            document.querySelector("#span3").style.visibility="visible";
            document.querySelector("#span9").style.visibility="visible";
            mobilenu.style.borderColor="red";
            e.preventDefault();
        }
        if(newpass.value.trim()==""){
            document.querySelector("#span4").style.visibility="visible";
            document.querySelector("#span10").style.visibility="visible";
            newpass.style.borderColor="red";
            e.preventDefault();
        }
        if(anyone1.checked==false && anyone2.checked==false && anyone3.checked==false){
            document.querySelector("#border1").style.borderColor="red";
            document.querySelector("#border2").style.borderColor="red";
            document.querySelector("#border3").style.borderColor="red";
            document.querySelector("#span6").style.visibility="visible";
            e.preventDefault();
        }
        if(dateadd.value=""){
            e.preventDefault();
            alert("date is not seleceted");
        }

    $(document).ready(function(){
        var a=true;
        var b=true;
        var c=true;
        var d=true;

    $('#input3').keyup(function(){
        firstname_check();
    })
    function firstname_check(){
        var user=$('#input3').val();
        if(user.trim().length<=5){
            document.querySelector("#span1").style.visibility="visible";
            document.querySelector("#span7").style.visibility="visible";
            alert("firstname must be greater than 5");
            a=false;
            return false;
        }
        else{
            document.querySelector("#span1").style.visibility="hidden";
            document.querySelector("#span7").style.visibility="hidden";
            $('input3').css("borderColor","black");
            return true;
        }
    }
    $('#input4').keyup(function(){
        surname_check();
    })
    function surname_check(){
        var user1=$('#input4').val();
        if(user1.trim().length<=5){
            document.querySelector("#span2").style.visibility="visible";
            document.querySelector("#span8").style.visibility="visible";
            alert("surname must be greater than 5");
            b=false;
            return false;
        }
        else{
            document.querySelector("#span2").style.visibility="hidden";
            document.querySelector("#span8").style.visibility="hidden";
            $('input4').css("borderColor","black");
            return true;
        }
    }
    $('#input5').keyup(function(){
        mobile_check();
    })
    function mobile_check(){
        var user2=$('#input5').val();
        if(user2.trim().length<=9){
            document.querySelector("#span3").style.visibility="visible";
            document.querySelector("#span9").style.visibility="visible";
            alert("mobilenumber must be greater than 9");
            c=false;
            return false;
        }
        else{
            document.querySelector("#span3").style.visibility="hidden";
            document.querySelector("#span9").style.visibility="hidden";
            $('input5').css("borderColor","black");
            return true;
        }
    }
    $('#input6').keyup(function(){
        num_check();
    })
    function num_check(){
        var user3=$('#input6').val();
        if(user3.trim().length<=9){
            document.querySelector("#span4").style.visibility="visible";
            document.querySelector("#span10").style.visibility="visible";
            alert("newpassword must be greater than 9");
            d=false;
            return false;
        }
        else{
            document.querySelector("#span4").style.visibility="hidden";
            document.querySelector("#span10").style.visibility="hidden";
            $('input6').css("borderColor","black");
            return true;
        }
    }
    $('#button2').click(function(){
        a=true;
        b=true;
        c=true;
        d=true;
        firstname_check();
        surname_check();
        mobile_check();
        num_check();
        if(a==true && b==true && c==true && d==true){
            return true;
        }
        else{
            return false;
        }
    })
})
});
