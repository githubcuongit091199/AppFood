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

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
  }
};
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
    const dish = this.props.dish;
    if (dish != null) {
      return (
        <View>
          <Card>
            <Image
              source={{ uri:baseUrl+ dish.image }}
              style={{
                width: "100%",
                height: 100,
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Image>
            <Text style={styles.titleText}>{dish.name}</Text>
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
            <Text style={{ margin: 10, fontSize: 16 }}>{dish.description}</Text>
          </Card>
        </View>
      );
    }
    return <View />;
  }
}

class Fooddetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     food: Food,
  //   };
  // }
  render() {
     const dishId = parseInt(this.props.route.params.dishId);

    return (
      <View>
        <RenderDish dish={this.props.dishes.dishes[dishId]}/>
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <View style={{ height: 150 }}>
            <FlatList
              data={this.props.dishes.dishes}
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
     const dishId = parseInt(this.props.route.params.dishId);
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
          onPress={() =>  navigate('Fooddetail', { dishId: item.id })}
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
            source={{ uri: baseUrl + item.image }}
            style={{ width: 90, height: 90 }}
          ></Image>

          <Text style={{ fontSize: 16 }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps, )(Fooddetail);