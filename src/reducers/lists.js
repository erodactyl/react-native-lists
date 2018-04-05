import {
  ListActionTypes,
  TodoActionTypes,
  INITIALIZE
} from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case INITIALIZE:
      return action.payload.lists;
    case ListActionTypes.CREATE_TODO_LIST:
      return [...state, action.payload];
    case ListActionTypes.DELETE_TODO_LIST:
      return state.filter(list => list.id !== action.payload.id);
    case TodoActionTypes.CREATE_TODO:
      return state.map(
        list =>
          list.id === action.payload.parentId
            ? { ...list, items: [...list.items, action.payload] }
            : list
      );
    case TodoActionTypes.DELETE_TODO:
      return state.map(
        list =>
          list.id === action.payload.parentId
            ? {
                ...list,
                items: list.items.filter(item => item.id !== action.payload.id)
              }
            : list
      );
    case TodoActionTypes.TOGGLE_TODO_DONE:
      return state.map(
        list =>
          list.id === action.payload.parentId
            ? {
                ...list,
                items: list.items.map(
                  item =>
                    item.id === action.payload.id
                      ? { ...item, done: !item.done }
                      : item
                )
              }
            : list
      );
    default:
      return state;
  }
};
