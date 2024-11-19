function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = 'list-group-item';


    const taskText = document.createElement('span');
    taskText.textContent = taskInput;



    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';


    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });


    li.appendChild(taskText);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    document.getElementById('taskInput').value = '';
}
