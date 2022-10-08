// console.log("object");

let main_container = document.getElementById("main_div");
let dataArr = [];

async function displayData() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/list/all");
        let data = await response.json();
        console.log('data :>> ', data);
        let newData = data.message;

        for (let key in newData) {
            dataArr.push(key);
            console.log(newData[key])
        }
        console.log(typeof(dataArr));
        // console.log('dataArr :>> ', dataArr);
        appendData(dataArr);
    }
    catch (error) {
        console.log('error :>> ', error);
        let err_box = document.getElementById("error_div");
        let err_msg = document.createElement("h2");
        err_msg.innerText = "Some Error has found from Server";

        err_box.append(err_msg);
    }
}

displayData();


function appendData(data) {
    data.forEach(function (element) {

        let box = document.createElement("div");
        box.setAttribute("id", "box_container");
        box.onclick = () => {
            addPuppy(element);
            window.location.href = "puppy.html";
        }

        let breed = document.createElement("h2");
        breed.setAttribute("class", "breed_name");
        breed.innerText = element;

        box.append(breed);
        main_container.append(box);

    });
}


function addPuppy(data) {
    localStorage.setItem("dog", JSON.stringify(data));
}