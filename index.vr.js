import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';

export default class hellovr extends React.Component {
  render() {
    return (
      <View>
       <Pano source={asset('chess-world.jpg')}/>
       <Text
         style={{
           fontSize: 0.8,
           layoutOrigin: [0.5, 0.5],
           transform: [{translate: [0, 0, -3]}],
         }}>
         Hello Virtual World
       </Text>

       <Image  style={{
          fontSize: 0.8,
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -3]}],
          width: 1, height: 1
        }}
        source={{uri: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/14991885_10211586598043149_8049319054690526636_n.jpg?oh=9f48bb71de6184720d194a42a5189d76&oe=59946D07'}}
       />
     </View>
    );
  }
};

AppRegistry.registerComponent('hellovr', () => hellovr);
