import React from 'react';
// import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { Avatar, Divider, Button } from 'react-native-elements';

import colors from '../../assets/colors';

// var {height, width} = Dimensions.get('window');

class SportIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    switch (this.props.sport) {
      case 'football':
        return (
          <FontAwesome
              name='soccer-ball-o'
              size={this.props.size}
              color={this.props.color}
          />
          );
      case 'basket':
        return (
          <FontAwesome5
              name='basketball-ball'
              size={this.props.size}
              color={this.props.color}
          />
          );
      default:
        return (
          <FontAwesome
              name='soccer-ball-o'
              size={35}
              color={colors.darkGray1}
          />
          );
      }
  }
}

// const styles = {
//   profileContainer: {
//     width: '100%',
//     // backgroundColor: 'white',
//     padding: 15,
//   },
//   sportTitleContainer: {
//     paddingLeft: width / 15,
//     height: 30,
//   },
//   sportTitle: {
//     // fontWeight: 'bold',
//     color: colors.darkGray1,
//     fontSize: 20,
//   },
//   sportRankContainer: {
//     paddingLeft: width / 15,
//     // height: 30,
//   },
//   sportRank: {
//     // fontWeight: 'bold',
//     color: colors.darkGray2,
//     fontSize: 15,
//   },
//   profile: {
//     backgroundColor: 'white',
//     height: 80,
//     borderRadius: 5,
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingLeft: width / 15,
//   },
//   profileEnabled: {
//     borderLeftWidth: 8,
//     borderColor: colors.darkViolet1,
//   },
//   profileDisabled: {
//     borderLeftWidth: 8,
//     borderColor: colors.darkGray2,
//   }
// }

export default SportIcon