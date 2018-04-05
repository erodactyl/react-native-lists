import { AsyncStorage } from "react-native";
import { INITIALIZE } from "./constants";

export const initialize = () => async dispatch => {
  const store = await AsyncStorage.getItem("todo_lists");
  if (store !== null) {
    const { lists } = JSON.parse(store);
    dispatch({ type: INITIALIZE, payload: { lists } });
  }
};
