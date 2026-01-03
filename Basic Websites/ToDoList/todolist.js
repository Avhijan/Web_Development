$(document).ready(function () 
{
    const savedData = localStorage.getItem('myTodoList');
    if (savedData) {
        const myTodos = JSON.parse(savedData);
        myTodos.forEach(function(task) {
            // Use a ternary operator to add "checked" and "completed" if task.done is true
            const isChecked = task.done ? 'checked' : '';
            const isCompleted = task.done ? 'completed' : '';

            const taskItem = `
                <li>
                    <span class="task-text ${isCompleted}">${task.text}</span>
                    <input type="checkbox" class="complete-checkbox" ${isChecked}>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </li>`;
            $('#task-list').append(taskItem);
        });
    }


    function saveTasks() {
    let tasks = [];
    $('#task-list li').each(function() {
        const taskObject = {
            text: $(this).find('.task-text').text(),
            done: $(this).find('.complete-checkbox').prop('checked') // true or false
        };
        tasks.push(taskObject);
    });
    localStorage.setItem('myTodoList', JSON.stringify(tasks));
}


    //adding button
    $('#add-btn').click(function (){
        const taskText = $('#task-input').val().trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const taskItem = 
        `
            <li>
                <span class="task-text">${taskText}</span>
                <input type="checkbox" class="complete-checkbox">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </li>
        `;
        $('#task-list').append(taskItem);
        $('#task-input').val('');
        saveTasks();
    });


    // delete
    $('#task-list').on('click', '.delete-btn', function () 
    {
        $(this).parent().remove();
        saveTasks();
    });


    // edit
    $('#task-list').on('click', '.edit-btn', function () 
    {
        const taskSpan = $(this).siblings('.task-text');
        const currentText = taskSpan.text();
        const newText = prompt('Update task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            taskSpan.text(newText);
        }
        saveTasks();
    });

    // // Complete task (checkbox)
    // $('#task-list').on('change', '.complete-checkbox', function () {
    //     const taskText = $(this).siblings('.task-text');

    //     if (this.checked) {
    //         taskText.addClass('completed');
    //     } else {
    //         taskText.removeClass('completed');
    //     }
    //     saveTasks();
    // });
    
    // Checkbox (Optional: usually you'd want to save the "checked" state too!)
    $('#task-list').on('change', '.complete-checkbox', function () 
    {

        $(this).siblings('.task-text').toggleClass('completed');
        saveTasks();

    });

});

