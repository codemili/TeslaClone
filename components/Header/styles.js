import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 35,
    position: 'absolute',
    paddingHorizontal: 20,
    zIndex: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;