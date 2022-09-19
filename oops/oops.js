console.log("object");

let candidate = [];

class User {
    #password;
    constructor() {
        this.organisation = "masai";


    }

    #validateUsername(username) {
        let value = username.includes("#") ? false : true;

        return value;
    }

    #validatePassword(password) {
        let value = password.includes("123") ? false : true;

        return value;
    }

    login(username, password) {

        if (username === this.username && password === this.#password) {
            console.log("login sucessfully");
        }
        else {
            console.log("Failed");
        }

    }



    signUp(username, password) {

        let isValidated = false;

        isValidated = this.#validateUsername(username) && this.#validatePassword(password)

        if (isValidated) {

            this.username = username;
            this.#password = password;

            console.log("User Registered Succesfully")

            candidate.push(this);
        }
        else {
            console.log("Please enter carefully")
        }
    }
}


// let u1 =new User();



// u1.signUp("mohit", "mrs");

// u1.login("mohit", "mrs");



class Student extends User {

    constructor() {

        super();
        this.numofAssignment = 0;

    }

    submitAssignment() {

        this.numofAssignment++;
        // console.log("%c Accepted", "color:green");

    }




}



class Admin extends User {
    constructor() {
        super();

    }

    removeUser(username) {

        candidate = candidate.filter((el) => {
            return el.username !== username;
        });

    }
}


let s1 = new Student();

s1.signUp("mohit", "MRS");


s1.login("mohit", "MRS");



s1.submitAssignment();
s1.submitAssignment();
s1.submitAssignment();

// console.log(s1.numofAssignment);



let admin =new Admin()

admin.signUp("Moh", "lll");
admin.login("Moh", "lll");



//u2.signUp("moh", "mr");


// console.log('u1 :>> ', u1);


// console.log(candidate);


let userData= JSON.parse(localStorage.getItem("user")) || [];


function signUp(e){
    e.preventDefault();


    let form = document.getElementById("form");

    // let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // let number = document.getElementById("num").value;
    let pwd = document.getElementById("password").value;

    if ( !email || !pwd) {
        alert("please type input");
        return;
    }

    let u1 =new User();

    u1.signUp(email, pwd);

    userData.push(u1);

    localStorage.setItem("user", JSON.stringify(userData));
    
    console.log('u1 :>> ', u1);
}