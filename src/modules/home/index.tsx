import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from './components/Card';
import Header from './components/Header';
import getApiData from './libs/GetApiData';

const styles: Record<string, object> = StyleSheet.create({
  flatList: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20
  },
  flatListContainer: {
    flex: 1,
    paddingTop: 80
  }
});

const Home: React.FC<{}> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [text, onChangeText] = useState('');

  useEffect(() => {
    const apiData: any = getApiData(currentPage);
    if (apiData) setData([...data, ...apiData.page['content-items'].content]);
  }, [currentPage]);

  return (
    <View>
      <Header
        onChangeText={(value: string) => onChangeText(value)}
        onPressBack={() => setShowSearch(false)}
        onPressSearch={() => setShowSearch(true)}
        showSearch={showSearch}
        text={text}
      />
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data.filter(
          (el: Record<string, string>) => el.name.toLowerCase().indexOf(
            text.toLowerCase()
          ) !== -1
        )}
        keyExtractor={(item: Record<string, string>) => item.id}
        numColumns={3}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.6}
        onEndReached={() => setCurrentPage(currentPage + 1)}
        renderItem={({ item, index }) => (
          <Card
            image={item['poster-image']}
            key={index.toString()}
            title={item.name}
          />
        )}
      />
    </View>
  );
};

export default Home;
