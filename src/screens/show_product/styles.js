import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  header_view: {
    flex: 0.10, flexDirection: 'row', backgroundColor: '#1464F4'
  },
  header_text: {
    fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 20, left: 10
  },
  space: {
    height: 25, width: 25
  },
  card: {
    flexDirection: 'column', backgroundColor: 'white', borderWidth: 0, flex: 0.5, borderRadius: 5, margin: 10, padding: 10
  },
  card_text: {
    fontSize: 18, color: '#1464F4', fontWeight: 'bold'
  },
  icon_design: {
    marginLeft: 180, top: 10, borderWidth: 0
  },
  modal_view_design: {
    backgroundColor: '#fff', flex: 0.2, width: 200, left: 150, borderRadius: 10, top: 20
  },
  modal_text: {
    padding: 10, fontWeight: '100', fontSize: 16
  }

});
export default styles;
