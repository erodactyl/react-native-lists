import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import moment from "moment";
import { Ionicons } from "react-native-vector-icons";
import Swipeout from "react-native-swipeout";
import { connect } from "react-redux";
import { createTodoList, deleteTodoList } from "../actions/lists";
import { initialize } from "../actions/initializeStore";
import { List } from "../components";

const mapStateToProps = ({ lists }) => ({ lists });

const mapDispatchToProps = {
  createTodoList,
  deleteTodoList,
  initialize
};

class Home extends Component {
  componentWillMount() {
    this.props.initialize();
  }
  addItem = () => {
    this.props.navigation.navigate("NewList");
  };
  openList = list => {
    this.props.navigation.navigate("List", {
      listId: list.id,
      title: list.name
    });
  };
  deleteList = id => {
    this.props.deleteTodoList({ id });
  };
  render() {
    return (
      <List
        items={this.props.lists}
        onItemPress={this.openList}
        deleteItem={this.deleteList}
        renderItem={item => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ color: "black" }}>{item.name}</Text>
            <Text>
              {moment(item.created).format("dddd, MMMM Do, YYYY h:mm:ss A")}
            </Text>
          </View>
        )}
        addItem={this.addItem}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
