import {isEnabled} from './lib/feature';

export function render(el, state) {
    const todoItems = state.todos.map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems)
    );
}

function renderApp(input, todoList) {
    if(isEnabled('renderBottom') && !isEnabled('filter') ) {
        return renderAddTodoAtBottom(input, todoList);
    } else if (isEnabled('filter') && !isEnabled('renderBottom')) {
        return renderFilter(input, todoList);
    } else if (isEnabled('filter') && isEnabled('renderBottom') && isEnabled('filterTop') ) {
        return renderFilterTop(input, todoList);
    } else {
        return renderAddTodoAtTop(input, todoList);
    }
}

function renderFilter(input, todoList) {
    return `<div id="app">
        ${input}
        ${todoList} `
        + getFilter() +
    `</div>`;
}


function renderFilterTop(input, todoList) {
    return `<div id="app">`
        + getFilter() +
        `${todoList}         
         ${input}
    </div>`;
}


function getFilter() {
    return `<form class="filter">
        <label>
            <input id="all" type="radio" name="filter" value="all" checked>Mostrar todos
        </label>
        <label>
            <input id="open" type="radio" name="filter" value="open">Somente abertos
        </label>
        <label>
            <input id="close" type="radio" name="filter" value="close">Somente fechados
        </label>
    </form>`;
}


function renderAddTodoAtTop(input, todoList) {
    return `<div id="app">
        ${input}
        ${todoList}
    </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
    return `<div id="app">
        ${todoList}
        ${input}
    </div>`;
}

function renderTodoTitle() {
    return `<h1 class="todo__title">TodoList</h1>`;
}

function renderInput() {
    return renderTodoTitle() + `<div class="todo__input"><input type="text" autofocus placeholder="Add a task" id="todoInput"><button id="addTodo"><i class="material-icons">add_circle_outline</i></button></div>`;
}

function renderTodos(todoItems) {
    return `<ul class="todo">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return `<li class="${todoClass}">
        <input class="js_toggle_todo" type="radio" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
        <span>${todo.text}</span>
    </li>`;
}
