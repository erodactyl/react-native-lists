import React, { Component } from "react";
import { Keyboard } from "react-native";
import { AddListItem } from "../components";
import { connect } from "react-redux";
import { createTodoList } from "../actions/lists";

const mapDispatchToProps = { createTodoList };

class NewList extends Component {
  submit = name => {
    const { id } = this.props.createTodoList({ name }).payload;
    this.props.navigation.navigate("List", { listId: id, title: name });
  };
  onCancel = () => {
    Keyboard.dismiss();
    this.props.navigation.navigate("Home");
  };
  render() {
    return <AddListItem submit={this.submit} onCancel={this.onCancel} />;
  }
}

export default connect(null, mapDispatchToProps)(NewList);
