//console.log("Hello Fetch()");

// fetch("https://fakestoreapi.com/products").then(function(res){
//     return res.json()
// })
// .then(function(res){
//     console.log('res : ', res);
// })
// .catch(function(err){
//     console.log('err : ', err);
// });

let container= document.getElementById("container");    

let data;

async function catchData(){
    try{
        let res= await fetch("https://fakestoreapi.com/products");
        data= await res.json();

        appendProduct(data);
    
        console.log('data : ', data);
    }

    catch(err){
        console.log('err : ', err);
    }




}

catchData();


function appendProduct(data){
    
    container.innerHTML=null;

    data.forEach(function (el){
        let div= document.createElement("div");

        let img= document.createElement("img");
        img.src=el.image;

        let title= document.createElement("p");
        title.innerText=el.title;

        let price= document.createElement("p");
        price.innerText=el.price;


        div.append(img, title, price);
        container.append(div);

    });
}



function sortLH(){
    data= data.sort(function(a,b){
        return a.price-b.price;

    })
     
   appendProduct(data);
}

function sortHL(){
    data= data.sort(function(a,b){
        return b.price-a.price;
        
    })
     
   appendProduct(data);
}


function filter(){
    let query= document.getElementById("query").value;

    let copy_data=data;
    copy_data=copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query)
    });
    appendProduct(copy_data);
}