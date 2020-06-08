import React, { Component } from 'react'
import { Scene, Actions, Router, Stack, Tabs } from 'react-native-router-flux'
import add_product from './../screens/add_product/add_product'
import show_product from './../screens/show_product/show_product'

// import messageList from '../screens/postlogin/messageList/messageList'
import styles from "./styles"

export default class App extends Component {

 render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navTitle}
        sceneStyle={styles.routerScene}
      >
        <Scene key="root" >
          <Stack key="add_product" hideNavBar>
            <Scene key="add_product" component={add_product} />
          </Stack>
          <Stack key="show_product" hideNavBar>
            <Scene key="show_product" component={show_product} />
          </Stack>
       </Scene>
      </Router>
    )
  }
}