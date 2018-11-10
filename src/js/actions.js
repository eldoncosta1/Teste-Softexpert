import {todos} from './state';
import api from "./api";
import Axios from 'axios';

export function toggleTodoState(id) {
    return {
        type: 'TODO_TOGGLE_DONE',
        id
    };
}

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

export function todoInput(text) { 

    const todo = {
        done: false,
        text
    }
  

    return async dispatch => {
        function onSuccess(success) {
          dispatch({ type: CREATE_USER, payload: success });
          return success;
        }
        function onError(error) {
          dispatch({ type: ERROR_GENERATED, error });
          return error;
        }
        try {
          const success = await axios.api.saveTodo(todo)
          return onSuccess(success);
        } catch (error) {
          return onError(error);
        }
      }
   
  

}


export const load = () => {
    return {
        type: 'LOAD'        
    }
}
