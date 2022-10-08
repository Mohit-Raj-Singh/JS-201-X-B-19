// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html
let container= document.getElementById("results");

async function showNews(){
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${"in"}`);
        let data= await res.json();
        let newData=data.articles;
        appendNews(newData);
        console.log('data :>> ', data);
    }
    catch(err){
        console.log('err :>> ', err);
    }

}

async function chNews(){
    try{
        let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${"ch"}`);
        let data= await res.json();
        let chData=data.articles;
        appendNews(newData);
        console.log('data :>> ', data);
    }
    catch(err){
        console.log('err :>> ', err);
    }
}

function appendNews(data){
    data.forEach(el => {
        let box= document.createElement("div");
        box.setAttribute("class", "news");

        let image=document.createElement("img");
        image.src=el.urlToImage;

        let title=document.createElement("p");
        title.innerText=el.title;

        let desc=document.createElement("p");
        desc.innerText=el.description;

        box.append(image, title, desc);

        container.append(box);
    });
}


showNews();