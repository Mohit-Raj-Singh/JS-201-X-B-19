let todoArr= JSON.parse(localStorage.getItem("todos")) || [];

append();

// function todo(t,s,i){
//     this.todo=t;
//     this.status=s;
//     this.id=i
// }


function todoApp(){
    // alert("yes")

    let todoValue= document.getElementById("todo_input").value;
    // let toggle= document.getElementById("toggle").value;
    // let id= Date.now()+todoValue;

    if(!todoValue){
        alert("Please type something");
        return;
    }

    // console.log(todoValue);


    let payload={
        todo: todoValue,
        status: false,
        id: Date.now()+todoValue
    }


    // let c1= new todo(todoValue, toggle, id);

    todoArr.push(payload);

    localStorage.setItem("todos", JSON.stringify(todoArr));

    // window.location.reload();

    append();

    // console.log(todoArr);
}


function append(){

    let container= document.querySelector(".alltodo_div");
    container.innerHTML=null;

    todoArr.map((el, i) =>{

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
            updateTodo(el.id);
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


function updateTodo(id){
    append();
    // window.location.reload();
    // alert("yes")


    todoArr= todoArr.map((el, i)=>{
        if(el.id===id){
            return { ...el, status : !el.status }
        }
        else{
            return el;
        }
    });

    localStorage.setItem("todos", JSON.stringify(todoArr));
    
    // console.log(updatedArr);
}



function deleteTodo(id){
    todoArr=todoArr.filter((el)=>{
        return el.id !== id;
    });

    localStorage.setItem("todos", JSON.stringify(todoArr));
    append();
}