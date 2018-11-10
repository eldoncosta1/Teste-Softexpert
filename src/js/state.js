import {createStore} from './lib/state';
import api from'./api'

const initialState = {
    todos: [
        /*{
            id: 0,
            text: 'Take a look at the application',
            done: false
        },
        {
            id: 1,
            text: 'Add ability to filter todos',
            done: false
        },
        {
            id: 2,
            text: 'Filter todos by status',
            done: false
        },
        {
            id: 3,
            text: 'Filter todos by text',
            done: true
        }*/
    ],
    
};

function todoChangeHandler(state, change) {
    console.log(state)
    console.log(change)
    switch(change.type) {
        case 'ADD_TODO':
        case 'TODO_INPUT':        

            state.todos.push({
                id: state.todos.length,
                text: change.text,
                done: false
            });
            break;
        case 'TODO_TOGGLE_DONE':
            for(let todo of state.todos) {
                if(todo.id === change.id) {
                    todo.done = !todo.done;
                    break;
                }
            }
            break;  
        case 'LOAD':
            console.log('LOAD');
            break;     

    }
}

export const todos = createStore(todoChangeHandler, initialState);
