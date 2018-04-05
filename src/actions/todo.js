import { TodoActionTypes as actionTypes } from "./constants";
import moment from "moment";

export const createTodo = ({ parentId, name }) => {
  const id = Math.random();
  const created = moment();
  const done = false;
  return {
    type: actionTypes.CREATE_TODO,
    payload: { parentId, name, id, done, created }
  };
};

export const deleteTodo = ({ parentId, id }) => {
  return { type: actionTypes.DELETE_TODO, payload: { parentId, id } };
};

export const toggleTodo = ({ parentId, id }) => {
  return { type: actionTypes.TOGGLE_TODO_DONE, payload: { parentId, id } };
};
