// console.log("object");
let dataLS = JSON.parse(localStorage.getItem("dog"));
let showImage = document.getElementById("image_container");
let imgaeArr = [];
console.log(dataLS);

async function displayImage() {
    try {
        let response = await fetch(`https://dog.ceo/api/breed/${dataLS}/images`);
        // let response= await fetch("https://dog.ceo/api/breed/hound/images");
        let data = await response.json();
        console.log('data :>> ', data);
        let newData = data.message;


        for (let key in newData) {
            imgaeArr.push(newData[key]);
            console.log(newData[key])
        }
        // console.log('dataArr :>> ', dataArr);
        appendImage(imgaeArr);
    }
    catch (error) {
        console.log('error :>> ', error);
        let err_box = document.getElementById("error_div");
        let err_msg = document.createElement("h2");
        err_msg.innerText = "Some Error has found from Server";

        err_box.append(err_msg);
    }
}


displayImage();


function appendImage(data) {

    data.forEach(element => {

        let box = document.createElement("div");
        box.setAttribute("class", "allImages");

        let imgae = document.createElement("img");
        imgae.src = element;

        box.append(imgae);

        showImage.append(box);
    });

}