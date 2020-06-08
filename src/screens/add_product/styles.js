import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
       flex:1,
        backgroundColor:"white",
      },
    header_view: {
      flex:0.10,justifyContent:'center', backgroundColor:'#1464F4'
    },
    header_text: {
      fontSize: 20, fontWeight: 'bold', color: 'white',marginTop:20,left:10
    },
    space:{
      height: 25, width: 25
    },
  title_view : {
    borderWidth:0,flex:0.1,alignItems:'center',justifyContent:'center'
  },
  title_text : {
    fontWeight:'bold', fontSize:20, color:'#DC143C'  
  },
  name_input_text : {
    height: 40, borderWidth: 0,fontSize:18, borderBottomColor:'#DC143C',borderBottomWidth:2  
  },
  price_input_text : {
    height: 40, borderWidth: 0,fontSize:18, borderBottomColor:'grey',marginTop:20, borderBottomWidth:2  
  },
  filter_container : {
    height: 40,borderWidth:0,flex:1,margin:12
  },
  filter_view : {
    flexDirection:'row',borderWidth:0
  },
  filter_text: {
    fontSize:18,fontWeight:'bold',padding:20
  },
  save_btn : {
    borderWidth:0,height:40,width:80,alignItems:'center',justifyContent:'center',backgroundColor:'#DCDCDC',top:'20%',left:'40%'
  },
  loader_view: {
    height: height, width: width, position: 'absolute', justifyContent:
            'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'rgba(223, 99, 54, 0.5)'
  }
});
export default styles;
