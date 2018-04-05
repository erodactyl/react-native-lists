import { ListActionTypes as actionTypes } from "./constants";
import moment from "moment";

export const createTodoList = ({ name }) => {
  const created = moment();
  const id = Math.random();
  return {
    type: actionTypes.CREATE_TODO_LIST,
    payload: {
      name,
      created,
      id,
      items: []
    }
  };
};

export const deleteTodoList = ({ id }) => {
  return { type: actionTypes.DELETE_TODO_LIST, payload: { id } };
};
