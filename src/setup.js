/**
 * Created by huoban-xia on 2017/7/24.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import ImageEquallyEnlarge from './components/imageEquallyEnlarge';
export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr: [{
        title: ['图片描述的抢我的期望的去我的确定确定确定确定请问的期望的前雾灯1', '图片的确定请问描述2'],
        imgs: ['img_1.jpg', 'img_2.jpg'],
      }, {
        title: ['图片描述2', '图片的抢我的期望确定确定确定描述2'],
        imgs: ['img_3.jpg'],
      }, {
        title: ['图片描述2', '图片描述2', '图片描述的前雾灯确定请问确定2'],
        imgs: ['img_4.jpg', 'img_5.jpg', 'img_6.jpg'],
      }, {
        title: ['图片描述2', '图片描述2'],
        imgs: ['img_7.jpg', 'img_8.jpg', 'img_9.jpg'],
      }],
    };
  }

  componentWillMount() {

  }
  renderImgs = (val, i) => {
    const url = `./images/${val}.jpg`;
    return <Image style={styles.img} resizeMode={'contain'} source={require(url)} key={i} />
  };
  renderTitle = (val, i) => (
    <Text key={i}>{val}</Text>
  );
  renderList = (item, index) => (
    <View key={index}>
      <View>{item.title.map((val, i) => this.renderTitle(val, i))}</View>
      {item.imgs.map((val, i) => this.renderImgs(val, i))}
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        {/*<ImageEquallyEnlarge*/}
          {/*source={require('./images/bg.jpg')}*/}
          {/*originalHeight={70}*/}
          {/*originalWidth={100}*/}
        {/*/>*/}
        <Text style={styles.header}>此处为标题</Text>
        {/*<View>*/}
          {/*{this.state.imgArr.map((item, index) => this.renderList(item, index))}*/}
        {/*</View>*/}
      </View>
    );
  }
}
const Dimensions = require('Dimensions');
const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    backgroundColor: 'red',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  img: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  imgList: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
