const inputBox = document.querySelector("input");
 const choice = document.getElementById("myList");
 const todoContainer = document.querySelector(".todoList");
 
 let todoList=[]
 function addTodo(){
 var strUser = parseInt(choice.options[choice.selectedIndex].value);
 if(inputBox.value.length!==0 && strUser!==0){
 console.log(inputBox.value);
 todoList.push({todo:inputBox.value,color:strUser==1?"red":(strUser==2)?"#
FFBF00":"green"});
 console.log(todoList);
 inputBox.value="";
 showTodos();
 }else{
 return;
 }
 }
 function showTodos(){
 let todos = "";
 const pendingTasksNumb = document.querySelector(".pendingTasks");
 pendingTasksNumb.textContent = todoList.length;
 todoList.map((element,index)=>{
 // console.log(element);
 // console.log(index);
 todos+=`<li style=background:${element.color};color:white;>${element.
todo}<span class="icon" onclick="deleteTask(${index})"><i class="bi bi-dash￾circle"></i></span></li>`;
 })
 todoContainer.innerHTML = todos;
 }
 function deleteTask(index){
 todoList.splice(index,1);
 showTodos();
 }
 function deleteAllTasks(){
 todoList = [];
 showTodos();
 }
function high(){
 for(var i=0;i<=todoList.length-1;i++){
 var a=(Object.values(todoList[i]));
 if(a[1]=="red"){
 showHighTodos();
 }
 } }
function medium(){
 for(var i=0;i<=todoList.length-1;i++){
 var a=(Object.values(todoList[i]));
 if(a[1]=="#FFBF00"){
 showMediumTodos();
 }
 } }
function low(){
 for(var i=0;i<=todoList.length-1;i++){
 var a=(Object.values(todoList[i]));
 if(a[1]=="green"){
 showLowTodos();
 }
 } }
function showHighTodos(){
 let todos = "";
 const pendingTasksNumb = document.querySelector(".pendingTasks");
 pendingTasksNumb.textContent = todoList.length;
 todoList.map((element,index)=>{
 // console.log(element.color);
 // console.log(index);
 if(element.color=="red"){
 todos+=`<li style=background:${element.color};color:white;>${element.todo}<
span class="icon" onclick="deleteTask(${index})"><i class="bi bi-dash￾circle"></i></span></li>`;
 }
 
 })
 todoContainer.innerHTML = todos; }
function showMediumTodos(){
 let todos = "";
 const pendingTasksNumb = document.querySelector(".pendingTasks");
 pendingTasksNumb.textContent = todoList.length;
 todoList.map((element,index)=>{
 // console.log(element.color);
 // console.log(index);
 if(element.color=="#FFBF00"){
 todos+=`<li style=background:${element.color};color:white;>${element.todo}<
span class="icon" onclick="deleteTask(${index})"><i class="bi bi-dash￾circle"></i></span></li>`;
 }
 
 })
 todoContainer.innerHTML = todos; }
function showLowTodos(){
 let todos = "";
 const pendingTasksNumb = document.querySelector(".pendingTasks");
 pendingTasksNumb.textContent = todoList.length;
 todoList.map((element,index)=>{
 // console.log(element.color);
 // console.log(index);
 if(element.color=="green"){
 todos+=`<li style=background:${element.color};color:white;>${element.todo}<
span class="icon" onclick="deleteTask(${index})"><i class="bi bi-dashcircle"></i></span></li>`;
 }
 
 })
 todoContainer.innerHTML = todos; }
