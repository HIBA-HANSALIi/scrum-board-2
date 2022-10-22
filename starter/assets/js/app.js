/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let title = document.getElementById('titre')
let type=document.getElementById('feature')
let priority=document.getElementById('Priority')
let Status=document.getElementById('Status')
let date=document.getElementById('date')
let description=document.getElementById('description')

let todo = document.getElementById('to-do-tasks')
let Progress = document.getElementById('in-progress-tasks')
let done = document.getElementById('done-tasks')

let btnSave=document.getElementById('btnsave')

let _delete = document.getElementById('delete');
// let Id=document.getElementById('id')
//  const addTask= (ev)=> {
//  ev.preventDefault();

// //  document.forms[0].reset();

// };
function videInput(){
    console.log("jjjj");
    title.value = "";
    type.value = "";
    priority.value = "";
    Status.value = "";
    date.value = "";
    description.value = ""

    btnSave.innerHTML='save'
    btnSave.setAttribute("onclick",`AjouterTask()`)
    _delete.style.display ='none';


}

function AjouterTask() {

    let idTask = data[data.length-1].id+1;
    console.log(idTask);
    let tasks={
       
        id:idTask,
        title : title.value,
        type : type.checked? "feature" :"bug",
        priority :  priority.value,
        status: Status.value,
        date : date.value,
        description :description.value
    }
    data.push(tasks);
    console.log(data)
    Afficher();
}


function Afficher(){
    let to_do_counter=0;
    let in_progress_counter=0;
    let done_counter=0;
    todo.innerHTML='';
    Progress.innerHTML='';
    done.innerHTML='';
    for(let i = 0;i<data.length;i++){
        if(data[i].status== "To Do"){
            todo.innerHTML +=`<button id=${data[i]["id"]}  onclick="editeTask(${data[i]["id"]})" class="d-flex button border  w-100 p-1 "data-bs-toggle="modal"  data-bs-target="#taskButton" onclick="editTask(${data[i]["id"]})">
            <div class="col-md-1">
                <i class="bi bi-question-circle text-success"></i> 
            </div>
            <div class="text-start col-md-11 ">
                <div class="fw-bold">${data[i]["title"]}</div>
                <div class="">
                    <div class="text-gray">#${data[i]["id"]} created in ${data[i]["date"]}</div>
                    <div class="" title="">${data[i]["description"].slice(0,70)}</div>
                </div>
                <div class="">
                    <span class="col-md-auto btn btn-primary text-white ">${data[i]["priority"]}</span>
                    <span class="col-md-auto btn btn-gray text-dark">${data[i]["type"]}</span>
                </div>
            </div>
        </button>`;
        to_do_counter++;
        document.getElementById('to-do-tasks-count').innerText = to_do_counter;
        }
        else if(data[i].status == "In Progress"){
            Progress.innerHTML += `<button id=${data[i]["id"]} onclick="editeTask(${data[i]["id"]})" class="d-flex button border  w-100 p-1" data-bs-toggle="modal"  data-bs-target="#taskButton">
                <div class="col-md-1">
                <i class="bx bx-loader-alt text-success"></i> 
                </div>
                <div class="text-start col-md-11 ">
                    <div class="fw-bold">${data[i]["title"]}</div>
                    <div class="">
                        <div class="text-gray">#${data[i]["id"]} created in ${data[i]["date"]}</div>
                        <div class="" title="">${data[i]["description"].slice(0,70)}</div>
                    </div>
                    <div class="">
                        <span class="col-md-auto btn btn-primary text-white ">${data[i]["priority"]}</span>
                        <span class="col-md-auto btn btn-gray text-dark">${data[i]["type"]}</span>
                    </div>
                </div>
        </button>`;
        in_progress_counter++;
        document.getElementById('in-progress-tasks-count').innerText =in_progress_counter;
        }
        else if(data[i].status == "Done"){
            done.innerHTML += `<button id=${data[i]["id"]} onclick="editeTask(${data[i]["id"]})"  id=${data[i]["id"]} class="d-flex button border  w-100 p-1" data-bs-toggle="modal"  data-bs-target="#taskButton">
            <div class="col-md-1">
            <i class="bi bi-check-circle text-success"></i> 
            </div>
            <div class="text-start col-md-11 ">
                <div class="fw-bold">${data[i]["title"]}</div>
                <div class="">
                    <div class="text-gray">#${data[i]["id"]} created in ${data[i]["date"]}</div>
                    <div class="" title="">${data[i]["description"].slice(0,70)}</div>
                </div>
                <div class="">
                    <span class="col-md-auto btn btn-primary text-white ">${data[i]["priority"]}</span>
                    <span class="col-md-auto btn btn-gray text-dark">${data[i]["type"]}</span>
                </div>
            </div>
        </button>`;
        done_counter++;
        document.getElementById('done-tasks-count').innerText = done_counter;

        }
    }
}

Afficher();

let idTask;
function editeTask(id) {
    idTask = id;
     
    data.forEach(taskele => {


        if(taskele.id==id){
      console.log(taskele);

      title.value=taskele.title;
      description.value=taskele.description;
      priority.value=taskele.priority;
      type.value=taskele.type;
      Status.value=taskele.status;
      date.value=taskele.date;
        }
    });


    _delete.style.display = 'block';
    btnSave.innerHTML='update'
    btnSave.setAttribute("onclick",`updateTask(${id})`)

 }

 function updateTask(id) {

    data.forEach(taskele => {
    if(taskele.id==id){

        taskele.title=title.value;
        taskele.description=description.value;
        taskele.priority=priority.value;
        taskele.type=type.value;
        taskele.status=Status.value;
        taskele.date=date.value;
    }
    

    
   });
   Afficher();

}

function deleteTask(){

    console.log(idTask);

    for (let i = 0; i<data.length; i++){
        if (data[i].id == idTask) {
            data.splice(i, 1)
        }
    }
    Afficher();
}
// function deleteTask() {
//     // Get index of task in the array

//     // Remove task from array by index splice function

//     // close modal form

//     // refresh tasks
// }

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}