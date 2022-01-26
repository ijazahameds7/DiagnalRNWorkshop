import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import getImage from '../libs/GetImages';

const cardWidth = (Dimensions.get('window').width - 72) / 3;

const styles: Record<string, object> = StyleSheet.create({
  container: {
    height: cardWidth * 2,
    marginRight: 20,
    width: cardWidth
  },
  imageDimension: {
    height: cardWidth * 1.5,
    width: cardWidth
  },
  text: {
    color: 'white',
    fontFamily: 'TitilliumWeb-Light',
    fontSize: 16,
    paddingTop: 9
  },
  textContainer: {
    flex: 1,
    height: cardWidth * 0.5,
  }
});

const Card: React.FC<{ image: string, title: string }> = ({ image, title }) => (
  <View
    style={styles.container}
  >
    <Image
      resizeMode="cover"
      source={getImage(image)}
      style={styles.imageDimension}
    />
    <View
      style={styles.textContainer}
    >
      <Text
        style={styles.text}
      >
        {title.substring(0, 12)}
        {title.length > 25 ? '...' : ''}
      </Text>
    </View>
  </View>

);

export default Card;
