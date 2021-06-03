import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';

import Home from "./HomeComponent";
import Fooddetail from "./FooddetailComponent";
import Cart from "./CartComponent";
import Total from "./TotalCartComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";


const registerNavigator = createStackNavigator();
function RegisterNavigatorScreen() {
  return (
    <registerNavigator.Navigator
      initialRouteName="Register"
      screenOptions={{
        // headerStyle: { backgroundColor: "#7cc" },
        // headerTintColor: "#fff",
        // headerTitleStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <registerNavigator.Screen
        name="Register"
        component={Register}
        options={({ navigation }) => ({
          headerTitle: "Register",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </registerNavigator.Navigator>
  );
}

const LoginNavigator = createStackNavigator();
function LoginNavigatorScreen() {
  return (
    <LoginNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        // headerStyle: { backgroundColor: "#7cc" },
        // headerTintColor: "#fff",
        // headerTitleStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <LoginNavigator.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerTitle: "Login",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />  
          ),
        })}
      />
    </LoginNavigator.Navigator>
  );
}
const TotalNavigator = createStackNavigator();
function TotalNavigatorScreen() {
  return (
    <TotalNavigator.Navigator
      initialRouteName="Total"
      screenOptions={{
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <TotalNavigator.Screen
        name="Total"
        component={Total}
        options={({ navigation }) => ({
          headerTitle: "Total",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })} />
    </TotalNavigator.Navigator>
  );
}
const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <HomeNavigator.Screen name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: "Home",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <HomeNavigator.Screen
        name="Fooddetail"
        component={Fooddetail}
        options={{ headerTitle: "Food Detail" }}
      />
    </HomeNavigator.Navigator>
  );
}
const CartNavigator = createStackNavigator();
function CartNavigatorScreen() {
  return (
    <CartNavigator.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: { backgroundColor: "#512DA8" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <CartNavigator.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          headerTitle: "Cart",
          headerLeft: () => (
            <Icon
              name="menu"
              size={36}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })} />
    </CartNavigator.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();
function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName="Home">
      <MainNavigator.Screen
        name="Home"
        component={HomeNavigatorScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }}

      />
      <MainNavigator.Screen

        name="Menu"
        component={CartNavigatorScreen}
        options={{ headerShown: false }}
      />
 
      <MainNavigator.Screen
        name="Total"
        component={TotalNavigatorScreen}
        options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        name="Cart"
        component={CartNavigatorScreen}
        options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        name="Login"
        component={LoginNavigatorScreen}
        options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        name="Register"
        component={RegisterNavigatorScreen}
        options={{ headerShown: false }}
      />
    </MainNavigator.Navigator>


  );
}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}
export default Main;
