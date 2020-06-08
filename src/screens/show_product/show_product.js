//import react components here..
import React, { Component } from 'react'
import {
  Text, 
  View, Dimensions,
  SafeAreaView, Modal, ActivityIndicator,
  FlatList, TouchableOpacity
} from 'react-native'
import styles from "./styles"
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get("window");

export default class Show_product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product_list: this.props.product,
      modalVisible: false,//state of modal set false
      showProgress: false,
    }
  }

  //lifecycle method 
  componentDidMount() {
    AsyncStorage.setItem('product_detail', JSON.stringify(this.props.product))
    AsyncStorage.getItem('product_detail').then((data) => {
      this.setState({
        product_list: data
      })
    })
  }
  //open the popup modal
  openModal() {
    this.setState({
      modalVisible: true,
    })
  }


  //apply filter for A to Z
  filterByName() {
    this.setState({ modalVisible: false, showProgress: true })
    this.props.product.sort((a, b) => (a.product_name > b.product_name) ? 1 : ((b.product_name > a.product_name) ? -1 : 0));
    setTimeout(() => {
      this.setState({ showProgress: false })
    }, 1000)
  }

  //filter by product price 
  filterByPrice() {
    this.setState({ modalVisible: false, showProgress: true })
    this.props.product.sort((a, b) => (a.product_price > b.product_price) ? 1 : ((b.product_price > a.product_price) ? -1 : 0));
    setTimeout(() => {
      this.setState({ showProgress: false })
    }, 1000)
  }

  //filter by category 
  filterByCategory() {
    this.setState({ modalVisible: false, showProgress: true })
    this.props.product.sort((a, b) => (a.product_category > b.product_category) ? 1 : ((b.product_category > a.product_category) ? -1 : 0));
    setTimeout(() => {
      this.setState({ showProgress: false })
    }, 1000)
  }

  // hide show the pop up view
  popupShowHide() {
    this.setState({ modalVisible: false })
  }
  //Design:- render design here..
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.popupShowHide()
          }}
        >
          <View style={styles.modal_view_design}>
            <TouchableOpacity onPress={() => { this.filterByName() }}>
              <Text style={styles.modal_text}>By name A to Z</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.filterByPrice() }}>
              <Text style={styles.modal_text}>By price low to high</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.filterByCategory() }}>
              <Text style={styles.modal_text}>By category</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.header_view}>
          <Text style={styles.header_text}>Product Listing
      </Text>
          <View style={styles.space}></View>
          <TouchableOpacity style={styles.icon_design} onPress={() => { this.openModal() }}>
            <Text><Icon name="filter-outline" size={30} color="#fff" />
            </Text></TouchableOpacity>
        </View>

        <FlatList
          style={{ flexGrow: 1, flex: 0.5 }}
          data={(this.state.product_list != null) ? this.props.product : this.state.product_list}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.card_text}>
                  Name: {item.product_name}
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Price: {item.product_price}
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Category: {item.product_category}
                </Text>
              </View>
            )
          }}
        />
        {this.state.showProgress ? <View style={{
          height: height, width: width, position: 'absolute', justifyContent:
            'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'rgba(223, 99, 54, 0.5)'
        }}>
          <ActivityIndicator size='large' color='white' style={{ paddingTop: 30 }}></ActivityIndicator>
        </View> : null}
      </SafeAreaView>
    );
  }
}