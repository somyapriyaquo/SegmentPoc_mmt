import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { styles } from '../../screens/Booked/styles';

export default class BookedScreen extends React.Component {
  // data member
  item;
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.item = navigation.state.params;
    console.log('booked-->', this.item);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/mmtlogo.png')}
            style={{ height: 40, width: 40 }}
          />
          <Text style={styles.flightBookinText}>Flight Booking</Text>
          <View>
            <Text style={styles.text}>
              {this.item.flightHistory.journeyDetail.date}
            </Text>
            <View style={styles.flexContent}>
              <Text style={styles.text}>
                {this.item.flightHistory.journeyDetail.from}
              </Text>
              <Text style={styles.text}>&#x2192;</Text>
              <Text style={styles.text}>
                {this.item.flightHistory.journeyDetail.to}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.subheaderText}>
            {this.item.flightHistory.journeyDetail.from}
          </Text>
          <Image
            source={require('../../assets/images/plane-solid.png')}
            style={{ height: 40, width: 60 }}
          />
          <Text style={styles.subheaderText}>
            {this.item.flightHistory.journeyDetail.to}
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.label}>Departs</Text>
            <Text style={styles.labelValue}>
              {this.item.flightHistory.selectedItem.dep}
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Arrives</Text>
            <Text style={styles.labelValue}>
              {this.item.flightHistory.selectedItem.arr}
            </Text>
          </View>
          <View>
            <Text style={styles.label}>PNR</Text>
            <Text style={styles.labelValue}>WRIVCGG</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.label}>Passenger</Text>
            <Text style={styles.labelValue}>
              {this.item.passengerDetails.name}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/barcode.jpeg')}
            style={styles.barCode}
          />
        </View>
      </View>
    );
  }
}
