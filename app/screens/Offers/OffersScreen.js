import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../style';

export default class OffersScreen extends React.Component {
  // data member
  item;
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.item = navigation.state.params;
    console.log('receive-->', this.item);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerHead}>
          <View style={styles.subHeaderHead}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text style={styles.backArrow}>&#x2190;</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Offer</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: this.item.img }} style={styles.imgOffer} />
          <Text style={styles.header}>{this.item.name}</Text>
          <Text style={styles.subheader}>{this.item.desc}</Text>
          <Text style={styles.offers}>{this.item.offers}</Text>
          <Text style={styles.code}>{this.item.code}</Text>
        </View>
      </View>
    );
  }
}
