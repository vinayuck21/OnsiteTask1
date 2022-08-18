window.addEventListener('load', ()=>{

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector("#tasks")
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    form.addEventListener('submit', (e) => {

        DisplayTodos
        e.preventDefault(); 
        console.log("submit")
        const task = input.value;

        if(!task) {
            alert("fill out task")   
        } 
        else{
            todos.push(task)
            localStorage.setItem("todos", JSON.stringify(todos))

        const task_el = document.createElement("div");
        task_el.classList.add("task"); 


        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")

        task_el.appendChild(task_content_el)

                
        const task_input_el=document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.type="text"
        task_input_el.value=task;
        task_input_el.setAttribute("readonly", "readonly")  

        task_content_el.appendChild(task_input_el)

        const task_actions_el = document.createElement("div")
        task_actions_el.classList.add("actions")

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML = 'DELETE';

        const task_priority_el = document.createElement("button")
        task_priority_el.classList.add("imp")
        task_priority_el.innerHTML = 'IMP';        
        
        task_actions_el.appendChild(task_priority_el)
        task_actions_el.appendChild(task_delete_el)
        task_el.appendChild(task_actions_el)
        list_el.appendChild(task_el);
        task_actions_el.appendChild(task_delete_el);
        list_el.appendChild(task_el)

      

        task_delete_el.addEventListener("click", ()=>{
            list_el.removeChild(task_el)
            todos = todos.filter(t => t != task);
            localStorage.setItem('todos', JSON.stringify(todos))
        })

        task_priority_el.addEventListener("click", ()=>{
            list_el.removeChild(task_el)
            list_el.prepend(task_el)
            todos = todos.filter(t => t != task);
            //console.log(todos)
            todos.unshift(task)
            console.log(todos)
            localStorage.setItem('todos', JSON.stringify(todos))
            task_el.classList.add("high")
        })

        



        input.value=""
    }
    }
    )
})

DisplayTodos()

function DisplayTodos(){
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector("#tasks")
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach(task => {




    const task_el = document.createElement("div");
    task_el.classList.add("task"); 


    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content")

    task_el.appendChild(task_content_el)

            
    const task_input_el=document.createElement("input")
    task_input_el.classList.add("text")
    task_input_el.type="text"
    task_input_el.value=task;
    task_input_el.setAttribute("readonly", "readonly")  

    task_content_el.appendChild(task_input_el)

    const task_actions_el = document.createElement("div")
    task_actions_el.classList.add("actions")

    const task_delete_el = document.createElement("button")
    task_delete_el.classList.add("delete")
    task_delete_el.innerHTML = 'DELETE';

    const task_priority_el = document.createElement("button")
    task_priority_el.classList.add("imp")
    task_priority_el.innerHTML = 'IMP';        
    
    task_actions_el.appendChild(task_priority_el)

    task_actions_el.appendChild(task_delete_el)
    task_el.appendChild(task_actions_el)
    list_el.appendChild(task_el);
    task_actions_el.appendChild(task_delete_el);
    list_el.appendChild(task_el)


    task_delete_el.addEventListener("click", ()=>{
        list_el.removeChild(task_el)
        todos = todos.filter(t => t != task);
        localStorage.setItem('todos', JSON.stringify(todos))
    })

    task_priority_el.addEventListener("click", ()=>{
        list_el.removeChild(task_el)
        list_el.prepend(task_el)
        todos = todos.filter(t => t != task);
        //console.log(todos)
        todos.unshift(task)
        console.log(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
        task_el.classList.add("high")
    })


    input.value=""



})
}


