
const todoApp=async()=>{
    try{
        const res=await fetch("http://localhost:3000/todos");
        const data=await res.json();
        append(data);
    }
    catch(err){
        console.log('err :>> ', err);
    }
}
todoApp();

async function handleClick(){
    let todoValue= document.getElementById("todo_input").value;
    if(!todoValue){
        alert("Please type something");
        return;
    }

    let payload={
        todo: todoValue,
        status: false,
        id: Date.now()
    }

    const response= await fetch("http://localhost:3000/todos" , {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    const data =await response.json();
    alert("Added");
    todoApp();

}



function append(data){

    let container= document.querySelector(".alltodo_div");
    container.innerHTML=null;

    data.map((el, i) =>{

        let mainDiv=document.createElement("div");
        let todoDiv=document.createElement("div");
        let toggleDiv=document.createElement("div");
        let deleteDiv=document.createElement("div");

        let todoH3=document.createElement("h3");
        todoH3.innerText=el.todo;

        let toggleButton=document.createElement("button");
        if(el.status){
            toggleButton.innerText="Done";
            toggleButton.style.backgroundColor="green";
        }
        else{
            toggleButton.innerText="Not Done";
            toggleButton.style.backgroundColor="red";
        }

        toggleButton.addEventListener("click", ()=>{
            updateTodo(el.id, el.status);
        })

        let deleteButton=document.createElement("button");
        deleteButton.innerText="Delete";
        deleteButton.addEventListener("click", ()=>{
            deleteTodo(el.id);
        })

        todoDiv.append(todoH3);
        toggleDiv.append(toggleButton);
        deleteDiv.append(deleteButton);

        mainDiv.append(todoDiv, toggleDiv, deleteDiv);

        container.append(mainDiv);
    })


}


async function updateTodo(id,status){
    const response= await fetch(`http://localhost:3000/todos/${id}` , {
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: !status })
    })

    const data =await response.json();
    todoApp();
    alert("Updated");
}

async function deleteTodo(id){
    const response= await fetch(`http://localhost:3000/todos/${id}` , {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })

    const data =await response.json();
    todoApp();
    alert("Deleted");
}





