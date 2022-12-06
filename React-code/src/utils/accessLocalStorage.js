
function loadData(key){
    try{
        let temp=localStorage.getItem(key);
        temp=JSON.parse(temp);
        return temp;
    }
    catch(e){
        return undefined;
    }
}


function saveData(key,data){
    localStorage.setItem(key, JSON.stringify(data));
}

export { loadData, saveData };