import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '20%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  backgroundStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default styles;