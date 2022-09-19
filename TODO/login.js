let userdata=JSON.parse(localStorage.getItem("user"));


function login(event){

event.preventDefault();
let data={
    email:document.getElementById("emailL").value,
    password:document.getElementById("passwordL").value
}

console.log(data);

if(checksignin(data.email,data.password)==true){
    // localStorage.setItem("user",JSON.stringify(data));
    alert("sign in successful");

    window.location.href="index.html"
}else{
    alert("wrong username and password");
}
};

function checksignin(email,password){
// console.log(email,password);
let filtered=userdata.filter(function(element){
    return email==element.userEmail && password==element.userpwd ;
    
})
console.log(filtered);
if(filtered.length=="0"){
    return false;
}else{
    return true;
}

}