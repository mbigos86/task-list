{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done
        render();
    };

    const assignEvents = () => {
        const removeButtons = document.querySelectorAll(".js-removeTask");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="tasks__item js__task"
            >
            <button class="tasks__button tasks__button--toggleDone js-toggleDone">
            ${task.done ? "✔" : ""}
            </button>
            <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
                ${task.content}
                </span>
            <button class="tasks__button tasks__button--remove js-removeTask">
            🗑
            </button>
    
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        assignEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}