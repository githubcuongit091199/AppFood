
import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

class Cart extends Component {  
    constructor(props){
      super(props);
      this.state = {
        selectAll: false,
        cartItemsIsLoading: false,
        cartItems: [
    
          {id: '1', name: 'Cơm gà xối mỡ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcND_Itgvl3mvEOp8Knc8jlg5Sf4cXDd6OA&usqp=CAU',  price: '20000', description:'Gà thơm phức, da giòn tan' ,checked: 1 , qty: 1, },
          {id: '1', name: 'Cơm gà xối mỡ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcND_Itgvl3mvEOp8Knc8jlg5Sf4cXDd6OA&usqp=CAU',  price: '20000', description:'Gà thơm phức, da giòn tan' ,checked: 1 , qty: 1, },
          {id: '1', name: 'Cơm gà xối mỡ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcND_Itgvl3mvEOp8Knc8jlg5Sf4cXDd6OA&usqp=CAU',  price: '20000', description:'Gà thơm phức, da giòn tan' ,checked: 1 , qty: 1, },
          {id: '1', name: 'Cơm gà xối mỡ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcND_Itgvl3mvEOp8Knc8jlg5Sf4cXDd6OA&usqp=CAU',  price: '20000', description:'Gà thơm phức, da giòn tan'  ,checked: 1, qty: 1, },
          {id: '1', name: 'Cơm gà xối mỡ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcND_Itgvl3mvEOp8Knc8jlg5Sf4cXDd6OA&usqp=CAU',  price: '20000', description:'Gà thơm phức, da giòn tan' ,checked: 1 , qty: 1,},
        ]
      }
    }
    
    selectHandler = (index, value) => {
      const newItems = [...this.state.cartItems]; 
      newItems[index]['checked'] = value == 1 ? 0 : 1; 
      this.setState({ cartItems: newItems });
    }
    
    selectHandlerAll = (value) => {
      const newItems = [...this.state.cartItems]; 
      newItems.map((item, index) => {
        newItems[index]['checked'] = value == true ? 0 : 1; 
      });
      this.setState({ cartItems: newItems, selectAll: (value == true ? false : true) }); 
    }
    
    deleteHandler = (index) => {
      Alert.alert(
        'Are you sure you want to delete this item from your cart?',
        '',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Delete', onPress: () => {
            let updatedCart = this.state.cartItems; 
            updatedCart.splice(index, 1); 
            this.setState(updatedCart);
          }},
        ],
        { cancelable: false }
      );
    }
    
    quantityHandler = (action, index) => {
      const newItems = [...this.state.cartItems]; 
      
      let currentQty = newItems[index]['qty'];
      
      if(action == 'more'){
        newItems[index]['qty'] = currentQty + 1;
      } else if(action == 'less'){
        newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
      }
      
      this.setState({ cartItems: newItems }); 
    }
    
    subtotalPrice = () => {
      const { cartItems } = this.state;
      if(cartItems){
        return cartItems.reduce((sum, item) => sum + (item.checked == 1 ? item.qty * item.price : 0), 0 );
      }
      return 0;
    }
    
    
    
    render() {
      const { navigate } = this.props.navigation;
      const styles = StyleSheet.create({
        centerElement: {justifyContent: 'center', alignItems: 'center'},
      });
      
      const { cartItems, cartItemsIsLoading, selectAll } = this.state;
      
      return (
        <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
       
          
          {cartItemsIsLoading ? (
            <View style={[styles.centerElement, {height: 300}]}>
              <ActivityIndicator size="large" color="#ef5739" />
            </View>
          ) : (
            <ScrollView>	
              {cartItems && cartItems.map((item, i) => (
                <View key={i} style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120}}>
                  <View style={[styles.centerElement, {width: 60}]}>
                    <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandler(i, item.checked)}>
                      <Ionicons name={item.checked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={item.checked == 1 ? "#0faf9a" : "#aaaaaa"} />
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
                    <TouchableOpacity onPress={() => navigate("Fooddetail", { foodId: item.id })} style={{paddingRight: 10}}>
                      <Image source={{uri: item.image}} style={[styles.centerElement, {height: 60, width: 60, backgroundColor: '#eeeeee'}]} />
                    </TouchableOpacity>
                    <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
                      <Text numberOfLines={1} style={{fontSize: 15}}>{item.name}</Text>
                      <Text numberOfLines={1} style={{color: '#8f8f8f'}}>{item.color ? 'Variation: ' + item.color : ''}</Text>
                      <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>${item.qty * item.price}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                          <MaterialIcons name="remove" size={22} color="#cccccc" />
                        </TouchableOpacity>
                        <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
                        <TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                          <MaterialIcons name="add" size={22} color="#cccccc" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                  <View style={[styles.centerElement, {width: 60}]}>
                    <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.deleteHandler(i)}>
                      <Ionicons name="md-trash" size={25} color="#ee4d2d" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}
          
          {!cartItemsIsLoading &&
            <View style={{backgroundColor: '#fff', borderTopWidth: 2, borderColor: '#f6f6f6', paddingVertical: 5}}>
              <View style={{flexDirection: 'row'}}>
                <View style={[styles.centerElement, {width: 60}]}>
                  <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => this.selectHandlerAll(selectAll)}>
                    <Ionicons name={selectAll == true ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={selectAll == true ? "#0faf9a" : "#aaaaaa"} />
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text>Select All</Text>
                  <View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
                    <Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
                    <Text>${this.subtotalPrice().toFixed(2)}</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 32, paddingRight: 20, alignItems: 'center'}}>
                <TouchableOpacity style={[styles.centerElement, {backgroundColor: '#0faf9a', width: 100, height: 25, borderRadius: 5}]} onPress={() => console.log('test')}>
                  <Text style={{color: '#ffffff'}}>Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        </View>
      );
    }
  }

export default Cart;