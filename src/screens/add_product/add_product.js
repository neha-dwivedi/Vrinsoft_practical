//import react components here..
import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native'
import styles from "./styles"

//import external libraries here..
import { Actions } from 'react-native-router-flux'
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-community/async-storage'

var product_details = []
export default class Add_product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProgress: false,
      add_product_in_list: [],
      selected_category: 'cloths',
      name: '',
      price: '',
    }
  }

  //save the data
  saveTheData() {
    if (this.state.name === undefined || this.state.name.trim() === "") {
      Alert.alert('Vrinsoft', 'Please provide the product name')
    }
    else if (this.state.price === undefined || this.state.price === "") {
      Alert.alert('Vrinsoft', 'Please provide the price of product')
    }
    else {
      AsyncStorage.setItem('product_name', this.state.name)
      AsyncStorage.setItem('product_price', this.state.price)
      AsyncStorage.setItem('product_category', this.state.selected_category)
      product_details.push({
        'product_name': this.state.name,
        'product_price': this.state.price,
        'product_category': this.state.selected_category
      })
      Alert.alert('Vrinsoft', 'Your Product Added Successfully', [{ text: 'OK', onPress: () => Actions.show_product({ product: product_details }) },], { cancelable: false })

    }
  }
  //redirect to map page
  redirectToMapScreen(item) {
    this.setState({ showProgress: false })
    Actions.show_product({ detail: item })
  }

  //Design:- render design here..
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header_view}>
          <Text style={styles.header_text}>Adil Practical
      </Text>
          <View style={styles.space}></View>
        </View>
        <View style={styles.title_view}>
          <Text style={styles.title_text}>Add Product</Text>
        </View>
        <View style={{ margin: 10 }}>
          <TextInput
            placeholder='Enter Name'
            style={styles.name_input_text}
            ref="name"
            onChangeText={(name) => this.setState({ name })}
            returnKeyType='done' />
          <TextInput
            placeholder='Enter Price'
            style={styles.price_input_text}
            keyboardType='numeric'
            ref="price"
            onChangeText={(price) => this.setState({ price })}
            returnKeyType='done' />
        </View>
        <View style={styles.filter_view}>
          <Text style={styles.filter_text}>Select Category - </Text>
          <DropDownPicker
            items={[
              { label: 'Cloths', value: 'cloths' },
              { label: 'Beauty', value: 'beauty' },
              { label: 'Electronics', value: 'electronics' },
            ]}
            containerStyle={styles.filter_container}
            style={{ backgroundColor: '#fafafa' }}
            dropDownStyle={{ backgroundColor: '#fafafa', }}
            onChangeItem={item => this.setState({
              selected_category: item.value
            })}
          /></View>
        <TouchableOpacity style={styles.save_btn} onPress={() => { this.saveTheData() }}>
          <Text>SAVE</Text>
        </TouchableOpacity>
     </SafeAreaView>
    );
  }
}