const textArray = [] ;
let count = 0 ;
let task = {} ;
let taskState = [] ;
let activeCount = 0 ;
let newTodo = "" ;

// input event for in-new-todo
document.querySelector("#in-new-todo").addEventListener("input" , (e)=>{
  newTodo = e.target.value ;
})

// click event on "Add" button for adding new task into text array 
document.querySelector("#btn-add-task").addEventListener("click" , ()=>{
  if(newTodo == ""){
    alert("Enter new task ! !") ;
    return undefined ;
  }

  textArray[count] = newTodo ;
  activeCount++ ;
  activeTaskCountUpdater(activeCount) ;

  taskRemover() ;
  taskCreater() ;
  taskAppender() ;

  document.querySelector("#in-new-todo").value = "" ;
  newTodo = "" ;
  count++ ;

})

// function to removing the task from #task-screen
function taskRemover(){
  if(document.querySelector("#task-screen").childNodes.length > 1){
    
    let keys = Object.keys(task) ;
    for(let i of keys){

      task[i].div.remove() ;
    }
    task = {} ;
  }

}

// function to creating div for each row of task into task-screen
function taskCreater(){
  for(let index in textArray){
    task[`${index}`] = {} ;
    if(taskState[index] == "completed"){
      taskState[index] = "completed" ;
    }
    else{
      taskState[index] = "active" ;
    }
    // task[`${index}`].state = taskState[index] ;

    // div for each row
    task[`${index}`].div = document.createElement("div");
    task[`${index}`].div.id = `list-${index}`;
    task[`${index}`].div.classList.add("box");
    task[`${index}`].div.setAttribute("draggable", "true");
    // document.querySelector("#task-screen").appendChild(task[`${index}`].div) ;

    // span tag for active or completed circle 
    task[`${index}`].div.circle = document.createElement("span");
    if(taskState[index] == "active"){
      task[`${index}`].div.circle.classList.add("active-circle");
    }
    else{
      task[`${index}`].div.circle.classList.add("completed-circle");
    }
    // task[`${index}`].div.circle.classList.add("active-circle");

    task[`${index}`].div.appendChild(task[`${index}`].div.circle);
    // inside circle span we have 2 things (small-circle , check-icon)
    // small-circle
    task[`${index}`].div.circle.smallCircle = document.createElement("span");
    task[`${index}`].div.circle.smallCircle.classList.add("small-circle");
    task[`${index}`].div.circle.appendChild(task[`${index}`].div.circle.smallCircle);
    // check-icon
    task[`${index}`].div.circle.checkIcon = document.createElement("img");
    task[`${index}`].div.circle.checkIcon.setAttribute("src", "./assets/icon-check.svg");
    task[`${index}`].div.circle.appendChild(task[`${index}`].div.circle.checkIcon);

    // span tag for info
    task[`${index}`].div.info = document.createElement("span");
    task[`${index}`].div.info.classList.add("info");
    if(taskState[index] == "active"){
      task[`${index}`].div.info.textContent = textArray[index];
    }
    else{
      task[`${index}`].div.info.innerHTML = `<del>${textArray[index]}</del>`;
    }
    // task[`${index}`].div.info.textContent = textArray[index];
    task[`${index}`].div.appendChild(task[`${index}`].div.info);

    // span tag for cross
    task[`${index}`].div.cross = document.createElement("span");
    task[`${index}`].div.cross.classList.add("cross");
    task[`${index}`].div.cross.id = `cross-list-${index + 1}`;
    task[`${index}`].div.appendChild(task[`${index}`].div.cross);
    // inside cross span we need 2 images
    // cross image
    task[`${index}`].div.cross.image = document.createElement("img");
    task[`${index}`].div.cross.image.setAttribute("src", "./assets/icon-cross.svg");
    task[`${index}`].div.cross.appendChild(task[`${index}`].div.cross.image);
    // hover cross image
    task[`${index}`].div.cross.hoverImage = document.createElement("img");
    task[`${index}`].div.cross.hoverImage.setAttribute("src", "./assets/cross-hover.svg");
    task[`${index}`].div.cross.appendChild(task[`${index}`].div.cross.hoverImage);
  
    // task[`${index}`].div.circle.classList.add("completed-circle");

  }
}

function taskAppender(){
  let keys = Object.keys(task) ;
  for(let key of keys){
    document.querySelector("#task-screen").appendChild(task[key].div) ;
    addCircleClickListener(task, key) ;
    addCrossClickListner(task , key) ;
  }
}

function addCircleClickListener(task, key){
  task[key].div.circle.addEventListener("click" , ()=>{
    if(taskState[key] == "active"){
      taskState[key] = "completed" ;
      task[key].div.circle.classList.remove("active-circle");
      task[key].div.circle.classList.add("completed-circle");
      task[key].div.info.innerHTML = `<del>${task[key].div.info.textContent}</del>`
     
      activeCount-- ;
      activeTaskCountUpdater(activeCount) ;
    }
    else if(taskState[key] == "completed"){
      console.log("run")
      taskState[key] = "active" ;
      task[key].div.circle.classList.remove("completed-circle");
      task[key].div.circle.classList.add("active-circle");
      task[key].div.info.innerHTML = task[key].div.info.textContent

      activeCount++ ;
      activeTaskCountUpdater(activeCount) ;
    }
  })
}

function addCrossClickListner(task , key){
  task[key].div.cross.addEventListener("click" , ()=>{
    if(taskState[key] == "active"){
      activeCount-- ;
      activeTaskCountUpdater(activeCount) ;
    }
    taskState.splice(key, 1) ;
    taskRemover() ;
    textArray.splice(key , 1) ;
    taskCreater() ;
    taskAppender() ;
  })
}

function activeTaskCountUpdater(upValue){
  document.querySelector("#left-items").textContent = `${upValue} task left` ;
}