import { TodoActionTypes as actionTypes } from "./constants";

export const createTodo = ({ parentId, name }) => {
  const id = Math.random();
  const done = false;
  return {
    type: actionTypes.CREATE_TODO,
    payload: { parentId, name, id, done }
  };
};

export const deleteTodo = ({ parentId, id }) => {
  return { type: actionTypes.DELETE_TODO, payload: { parentId, id } };
};

export const toggleTodo = ({ parentId, id }) => {
  return { type: actionTypes.TOGGLE_TODO_DONE, payload: { parentId, id } };
};
