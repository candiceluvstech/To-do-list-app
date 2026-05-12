const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

function addTask(){ 
    if(inputBox.value.trim() === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="check-circle"></span>
            <span class="task-text">${inputBox.value.trim()}</span>
            <span class="delete-btn">×</span>
        `;
        listContainer.appendChild(li);
        inputBox.value = "";
        
        // Add event listeners
        li.querySelector('.check-circle').addEventListener('click', function(){
            li.classList.toggle('checked');
        });
        
        li.querySelector('.delete-btn').addEventListener('click', function(){
            li.remove();
        });
    }
}

function clearAll(){
    listContainer.innerHTML = '';
}