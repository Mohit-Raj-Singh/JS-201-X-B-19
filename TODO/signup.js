let userData=JSON.parse(localStorage.getItem("user")) || [];




function signUp(e) {
    e.preventDefault();


    let form = document.getElementById("form");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("num").value;
    let pwd = document.getElementById("password").value;

    if (!name || !email || !number || !pwd) {
        alert("please type input");
        return;
    }

    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "pistol"
    // }

    // let payload={
    //     email,
    //     password
    // }


    let payload={
        userName: name,
        userEmail: email,
        userNum:number,
        userpwd:pwd
    }

    userData.push(payload);

    localStorage.setItem("user", JSON.stringify(userData));

    alert("User Register Successful");
    window.location.href="login.html";
    console.log(payload);

    // fetch("https://reqres.in/api/register", {
    //     method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload)
    // }).then((res) =>{

    //     return res.json();
    //     //pending
    // }).then((res)=>{
    //     //fullfilled
    //     console.log(res);
    // }).catch((err)=>{
    //     //cancelled
    //     console.log(err);
    // })

    // console.log(name, email, number, pwd);
}