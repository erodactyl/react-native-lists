import { StackNavigator } from "react-navigation";
import List from "./List";
import Home from "./Home";
import NewList from "./NewList";

const App = StackNavigator({
  Home: { screen: Home, navigationOptions: { title: "Home" } },
  List: { screen: List }
});

const NewListModal = StackNavigator({
  NewList: {
    screen: NewList,
    navigationOptions: { title: "Create a new list" }
  }
});

export default StackNavigator(
  {
    Main: { screen: App },
    NewList: { screen: NewListModal }
  },
  { mode: "modal", headerMode: "none" }
);
