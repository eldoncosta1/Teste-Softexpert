import {todos} from './state';
import {listen} from './lib/events';
import {
    addTodo, 
    toggleTodoState,
    todoInput    
} from './actions';

export function registerEventHandlers() {
    console.log('registerEventHandlers')
    listen("load", '#app', event => {
        console.log('load');
    });

    listen('click', '#addTodo', event => {        
        const todoInput = document.getElementById('todoInput');
        todos.dispatch(addTodo(todoInput.value));
        event.stopPropagation();
    });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
    });

    listen('change', '#todoInput', event => {
        todos.dispatch(todoInput(event.target.value));       
        document.getElementById('todoInput').focus();                
    });

    listen('click', '#all', event => {
        let items = document.querySelectorAll('.todo__item');
        items.forEach(item => { item.classList.remove('close') });       
        
    });

    listen('click', '#open', event => {
        let itemsOpen = document.querySelectorAll('.todo__item--open');
        let itemsClose = document.querySelectorAll('.todo__item--done'); 

        itemsOpen.forEach(item => { item.classList.remove('close') });
        itemsClose.forEach(item => { item.classList.add('close') });
        
    });

    listen('click', '#close', event => {
        let itemsOpen = document.querySelectorAll('.todo__item--open');
        let itemsClose = document.querySelectorAll('.todo__item--done');        
        
        itemsOpen.forEach(item => { item.classList.add('close') });
        itemsClose.forEach(item => { item.classList.remove('close') });
        
    });


}
