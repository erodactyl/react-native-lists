import React, { Component } from "react";
import { View, TextInput, Keyboard, TouchableOpacity } from "react-native";
import { List, ListItem, Text, Fab } from "native-base";
import Autocomplete from "react-native-autocomplete-input";
import Icon from "react-native-vector-icons/Ionicons";
import Swipeout from "react-native-swipeout";

const autocompleteTodos = [
  "Run",
  "Ear",
  "Choose",
  "Ski",
  "Bully",
  "Swim",
  "Drive"
];

export default class ItemList extends Component {
  state = {
    value: "",
    hasNew: false
  };
  addNew = () => {
    Keyboard.dismiss();
    if (this.state.value !== "") {
      this.props.submitNew(this.state.value);
    }
    this.setState({ hasNew: false, value: "" });
  };
  filterData = () => {
    return autocompleteTodos.filter(item =>
      item.toLowerCase().includes(this.state.value.toLowerCase())
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <List>
          {this.props.items.map(item => {
            return (
              <Swipeout
                key={item.id}
                style={{ height: 50 }}
                right={[
                  {
                    text: "Delete",
                    type: "delete",
                    onPress: () => this.props.deleteItem(item.id)
                  }
                ]}
              >
                <ListItem
                  key={item.id}
                  onPress={() => this.props.onItemPress(item)}
                >
                  {this.props.renderItem(item)}
                </ListItem>
              </Swipeout>
            );
          })}
        </List>
        <Fab
          position="bottomRight"
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={
            this.props.addable
              ? () => this.setState({ hasNew: true })
              : this.props.addItem
          }
        >
          <Icon name="md-add" color="white" />
        </Fab>
        {this.state.hasNew &&
          this.props.addable && (
            <Autocomplete
              autoFocus
              data={this.filterData()}
              value={this.state.value}
              onChangeText={value => this.setState({ value })}
              renderItem={item => (
                <TouchableOpacity
                  onPress={() => this.setState({ value: item })}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              onSubmitEditing={this.addNew}
            />
          )}
      </View>
    );
  }
}
