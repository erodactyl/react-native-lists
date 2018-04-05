import React from "react";
import App from "./screens";
import { Provider } from "react-redux";
import store from "./reducers";

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
