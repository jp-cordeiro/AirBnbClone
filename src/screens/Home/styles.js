import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginTop: 100,
    marginLeft: 25,
    textShadowColor: '#585858',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10
  },
  button: {
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttoText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchButton: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    zIndex: 100
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
