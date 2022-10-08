console.log("object");

let main_box = document.getElementById("show_pictures");
let id;

function dogResult() {
    let search_query = document.getElementById("seach_dog").value;
    let imageSearch = [];
    // console.log(search_query);

    async function searchData() {
        try {
            let response = await fetch(`https://dog.ceo/api/breed/${search_query}/images`);
            let data = await response.json();

            let newData = data.message;


            for (let key in newData) {
                imageSearch.push(newData[key]);
                console.log(newData[key])
            }
            searchAppend(imageSearch);
        }
        catch (error) {
            console.log('error :>> ', error);
            let err_box = document.getElementById("error_div");
            let err_msg = document.createElement("h2");
            err_msg.innerText = "Some Error has found from Server";

            err_box.append(err_msg);
        }
    }
    searchData();
}

function searchAppend(data) {

    data.forEach(element => {

        let box = document.createElement("div");
        box.setAttribute("class", "allSearch");

        let imgae = document.createElement("img");
        imgae.src = element;

        box.append(imgae);

        main_box.append(box);
    });
}



function debounce(func, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        func();
    }, delay);
}
