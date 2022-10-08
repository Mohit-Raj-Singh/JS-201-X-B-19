let mm=document.getElementById("maiMara");


async function getUser(){
    try{
        let response =await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await response.json();
        appendD(data);
        console.log('data :>> ', data);
    }
    catch(err){
        console.log('err :>> ', err);
    }
}

getUser();





async function getUser(){
    try{
        let response= await fetch("https://github.com/typicode/json-server#getting-started");
        let data=await response.json();
        console.log('data :>> ', data);
    }
    catch(err){
        console.log('err :>> ', err);
    }
    
}

getUser()


function appendD(data){
    data.forEach(element => {
        let p=document.createElement("p");
        p.innerText=element.email;

        let q=document.createElement("p");
        q.innerText=element.username;

        mm.append(p,q);
        
    });
}