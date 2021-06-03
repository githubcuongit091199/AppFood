import React, { Component } from "react";
import { View } from "react-native";
import {
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Food } from "../shared/food";
import { ListItem, Avatar } from "react-native-elements";

const styles = StyleSheet.create({
  qc: {
    height: 200,
  },
  flatListItem: {
    fontSize: 26,
  },
});
class RenderAdvertisement extends Component {
  render() {
    return (
      <Image
        style={styles.qc}
        source={{
          uri: "https://i.pinimg.com/280x280_RS/28/c3/9c/28c39cd2044e821bd5106d434a8f1338.jpg",
        }}
      />
    );
  }
}

class RenderSwiper extends Component {
  render() {
    return (
      <Image
        style={styles.qc}
        source={{
          uri: "https://i.pinimg.com/280x280_RS/28/c3/9c/28c39cd2044e821bd5106d434a8f1338.jpg",
        }}
      ></Image>
    );
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: Food,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RenderAdvertisement />

        <FlatList
          data={this.state.food}
          renderItem={({ item, index }) => this.renderFood(item, index)}
          keyExtractor={(item) => item.id.toString()}
        />

        {/* <RenderSwiper /> */}
        <View style={{ flexDirection: "column" }}>
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
  renderFood(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1 }}>
        <ListItem onPress={() => navigate("Fooddetail", { foodId: item.id })}>
          {/* <Avatar
                            source={{
                              uri: item.image,
                            }}
                          /> */}
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100 }}
          ></Image>
          <ListItem.Content>
            <ListItem.Title style={styles.flatListItem}>
              {item.name}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.flatListItem}>
              {item.price}đ
            </ListItem.Subtitle>
          </ListItem.Content>
          {/* <Text style={styles.flatListItem}>{item.name}</Text>
                          <Text style={styles.flatListItem}>{item.price}</Text>
                          <Text style={styles.flatListItem}>{item.description}</Text> */}
        </ListItem>
      </ScrollView>
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

export default Home;
