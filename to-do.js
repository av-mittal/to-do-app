let todoList=[
    {
        item: 'Buy Milk', 
        dueDate:'4/10/2023'
    }, 
    {
        item:'Go for a walk',
        dueDate:'4/10/2023'
    }];
displayItems();




function addTodo(){
    console.log('addTodo called');
console.log(document.querySelector('#todo-input'));
console.log(document.querySelector('#todo-date'));


    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    
    let todoItem=inputElement.value;
    let todoDate =dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value='';
    dateElement.value='';

    displayItems();
}
function displayItems(){
    let containerElement=document.querySelector('.todo-container');

    let newHtml='';

    for(let i=0;i< todoList.length;i++)
    {
        let item= todoList[i].item;
        let dueDate= todoList[i].dueDate;
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class= "delete-button" onclick= "todoList.splice(${i},1);
        displayItems();">Delete</button>`;


    }
    containerElement.innerHTML= newHtml;
}