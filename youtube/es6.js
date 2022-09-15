let API = "AIzaSyBCQ4AH7wESFlt2uB59u6LfXc4gn-PGOvY";
let container = document.getElementById("container");
let array_of_videos;

let getData = async () => {
    try {
        let query = document.getElementById("query").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`);
        let { items } = await res.json();

        array_of_videos = items;
        console.log(array_of_videos);
        appendVideos(array_of_videos)
    }
    catch (err) {
        console.log('err : ', err);
    }

}



let appendVideos = (data) => {
    container.innerHTML=null;

    data.forEach((el) => {
        let div = document.createElement("div");
        div.onclick= ()=>{
            saveVideo(el);

            window.location.href="play.html";

        }

        // let iframe = document.createElement("iframe")
        // iframe.src = `https://www.youtube.com/embed/${videoId}`

        // iframe.width = "100%"
        // iframe.height = "100%"
        // iframe.allow="fullscreen"

        let name = document.createElement("h5");
        name.innerText = el.snippet.title;

        let thum=document.createElement("img");
        thum.src=el.snippet.thumbnails.medium.url;

        div.append(thum, name);


        container.append(div);

    });
}


let saveVideo = (data) =>{
    localStorage.setItem("video", JSON.stringify(data));
}


