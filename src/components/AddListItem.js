import React, { Component } from "react";
import { View, TextInput, Keyboard, Text } from "react-native";
import { Button } from "native-base";

export default class AddListItem extends Component {
  state = {
    value: ""
  };
  onChangeText = value => {
    this.setState({ value });
  };
  onDone = () => {
    Keyboard.dismiss();
    if (this.state.value !== "") {
      this.props.submit(this.state.value);
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ width: "100%", height: 50, backgroundColor: "#BDBDBD" }}
          value={this.state.value}
          onChangeText={this.onChangeText}
          placeholder="name"
        />
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%"
          }}
        >
          <Button
            onPress={this.props.onCancel}
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#f44336",
              justifyContent: "center"
            }}
          >
            <Text>Cancel</Text>
          </Button>
          <Button
            onPress={this.onDone}
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#2196F3",
              justifyContent: "center"
            }}
          >
            <Text>Done</Text>
          </Button>
        </View>
      </View>
    );
  }
}
