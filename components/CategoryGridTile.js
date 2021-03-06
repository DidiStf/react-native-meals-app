import React from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const CategoryGridTile = ({ background, onSelect, title }) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.gridTile}>
      <TouchableComponent onPress={onSelect} style={styles.touchable}>
        <ImageBackground style={styles.image} source={background}>
          <View
            style={{
              ...styles.container /* , ...{ backgroundColor: color } */,
            }}
          >
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gridTile: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 19,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: '100%',
  },
  touchable: {
    flex: 1,
  },
});

export default CategoryGridTile;
