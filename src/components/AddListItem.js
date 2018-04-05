import React, { Component } from "react";
import { View, TextInput, Keyboard, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "native-base";

const iconNames = [
  "md-game-controller-b",
  "md-git-branch",
  "md-globe",
  "md-glasses",
  "logo-github",
  "logo-dropbox",
  "logo-facebook",
  "logo-euro",
  "md-code"
];

export default class AddListItem extends Component {
  state = {
    value: "",
    icon: null
  };
  onChangeText = value => {
    this.setState({ value });
  };
  onDone = () => {
    Keyboard.dismiss();
    if (this.state.value !== "") {
      this.props.submit(this.state.value, this.state.icon);
    }
  };
  select = name => {
    this.setState({ icon: name });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          autoFocus
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
        <View style={{ flexDirection: "row" }}>
          {iconNames.map(iconName => (
            <Icon
              key={iconName}
              style={
                this.state.icon === iconName
                  ? { color: "blue", margin: 10 }
                  : { margin: 10 }
              }
              name={iconName}
              size={32}
              onPress={() => this.select(iconName)}
            />
          ))}
        </View>
      </View>
    );
  }
}
