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