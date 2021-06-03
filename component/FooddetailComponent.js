import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Image } from "react-native-elements";
import { color } from "react-native-reanimated";
import { Food } from "../shared/food";

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "#f0f",
  },
});

class RenderDish extends Component {
  render() {
    const food = this.props.food;
    if (food != null) {
      return (
        <View>
          <Card>
            <Image
              source={{ uri: food.image }}
              style={{
                width: "100%",
                height: 100,
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Image>
            <Text style={styles.titleText}>{food.name}</Text>
            <View style={styles.fixToText}>
              <Button title="Buy now" color="#111111"></Button>
            </View>
          </Card>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              marginBottom: -5,
              fontWeight: "bold",
            }}
          >
            Description
          </Text>
          <Card>
            <Text style={{ margin: 10, fontSize: 16 }}>{food.description}</Text>
          </Card>
        </View>
      );
    }
    return <View />;
  }
}

class Fooddetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: Food,
    };
  }
  render() {
    const foodId = parseInt(this.props.route.params.foodId);
    return (
      <View>
        <RenderDish food={this.state.food[foodId]} />
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <View style={{ height: 150 }}>
            <FlatList
              data={this.state.food}
              style={{ backgroundColor: "white" }}
              horizontal={true}
              renderItem={({ item, index }) =>
                this.renderHorizontalFlatList(item, index)
              }
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </View>
    );
  }
  renderHorizontalFlatList(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          width: 100,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "black",
          margin: 4,
        }}
      >
        <TouchableOpacity
          onPress={() => navigate("Fooddetail", { foodId: item.id })}
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginTop: 6,
          }}
        >
          {/* <Avatar
                           source={{
                             uri: item.image,
                           }}
                         /> */}
          <Image
            source={{ uri: item.image }}
            style={{ width: 90, height: 90 }}
          ></Image>

          <Text style={{ fontSize: 16 }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Fooddetail;
