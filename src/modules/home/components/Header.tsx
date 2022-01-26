import React, { useRef } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Header {
  onChangeText: Function;
  onPressBack: Function;
  onPressSearch: Function;
  showSearch?: boolean;
  text: string;
}

const styles: Record<string, object> = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 96,
    position: 'absolute',
    width: '100%',
    zIndex: 5
  },
  icon: {
    height: 24,
    width: 24
  },
  iconWrapper: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 50
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    height: 40
  },
  inputContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
  }
});

const IconView: React.FC<{
  onPress: Function;
  source: number;
}> = ({
  onPress,
  source,
}) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.iconWrapper}
    >
      <Image
        resizeMode="contain"
        source={source}
        style={styles.icon}
      />
    </TouchableOpacity>
  )

const Header: React.FC<Header> = ({
  onChangeText,
  onPressBack,
  onPressSearch,
  showSearch = false,
  text
}) => {
  const textInputRef = useRef();

  const onGoBack = (): void => {
    textInputRef?.current.blur();
    onPressBack();
    onChangeText('');
  }

  const onSearchPress = (): void => {
    onPressSearch();
    setTimeout(() => {
      textInputRef?.current.focus();
    }, 0);
  }

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../assets/icons/nav_bar.png')}
      style={styles.headerContainer}
    >
      <IconView
        onPress={onGoBack}
        source={require('../../../assets/icons/Back.png')}
      />
      <View
        style={styles.inputContainer}
      >
        {showSearch
          ? (
            <TextInput
              style={styles.input}
              placeholder="Search"
              ref={textInputRef}
              onChangeText={(value: string) => onChangeText(value)}
              value={text}
            />
          ) : null}
      </View>
      <IconView
        onPress={onSearchPress}
        source={require('../../../assets/icons/search.png')}
      />
      <View />
    </ImageBackground>
  );
};

export default Header;
