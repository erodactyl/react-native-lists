import React, { Component } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import { List } from "../components";
import { connect } from "react-redux";
import { createTodo, deleteTodo, toggleTodo } from "../actions/todo";

const mapStateToProps = ({ lists }) => ({ lists });

const mapDispatchToProps = {
  createTodo,
  deleteTodo,
  toggleTodo
};

class TodoList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  createTodo = name => {
    this.props.createTodo({
      name,
      parentId: this.props.navigation.state.params.listId
    });
  };
  deleteTodo = id => {
    this.props.deleteTodo({
      parentId: this.props.navigation.state.params.listId,
      id
    });
  };
  toggleTodo = id => {
    this.props.toggleTodo({
      parentId: this.props.navigation.state.params.listId,
      id
    });
  };
  render() {
    const list = this.props.lists.find(
      el => el.id === this.props.navigation.state.params.listId
    );
    return (
      <List
        items={list.items}
        deleteItem={this.deleteTodo}
        renderItem={item => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                textDecorationLine: item.done ? "line-through" : "none",
                color: item.done ? "#9E9E9E" : "black"
              }}
            >
              {item.name}
            </Text>
            <Text
              style={
                item.done
                  ? {
                      textDecorationLine: "line-through",
                      color: "#9E9E9E"
                    }
                  : null
              }
            >
              {moment(item.created).format("dddd, MMMM Do, YYYY h:mm:ss A")}
            </Text>
          </View>
        )}
        addable
        submitNew={this.createTodo}
        onItemPress={item => this.toggleTodo(item.id)}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
