import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from 'react-native';
import { styles } from '../../screens/Details/styles';
import { FloatingLabelInput } from '../../Components/FloatingLabel';
export default class DetailsScreen extends React.Component {
  // data member
  item;
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.item = navigation.state.params;
    console.log('DETAILS OF ITEM-->', this.item);
    this.state = { name: 'abc', email: 'abc@abc.com', mob: '+91-xxxxxxxx' };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.subHeader}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('FlightSearch')}
            >
              <Text style={styles.backArrow}>&#x2190;</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Traveller Details</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.subheadingWrapper}>
          <View style={styles.flexContent}>
            <View style={styles.flexContent}>
              <Text style={styles.darkText}>
                {this.item.journeyDetail.from}
              </Text>
              <Text style={styles.darkText}>&#x2192;</Text>
              <Text style={styles.darkText}>{this.item.journeyDetail.to}</Text>
            </View>
          </View>
          <View style={styles.flexContent}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={this.item.journeyDetail.img}
                style={{ height: 30, width: 30 }}
              />
              <Text style={styles.lightText}>
                {this.item.journeyDetail.date}
              </Text>
            </View>
            <Text style={styles.lightText}>{this.item.selectedItem.stop}</Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={{ backgroundColor: 'rgba(220, 220, 220,0.6)' }}>
          <View
            style={{
              height: 40
            }}
          >
            <Text style={styles.contact}>Conact Information</Text>
            <Text style={styles.yourText}>
              Your ticket and flight info will be sent here
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.colorText}> Name</Text>
            {/* <TextInput
              style={styles.search}
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
              autoFocus={true}
            /> */}
            <FloatingLabelInput
              style={styles.textField}
              label="abc"
              value={this.state.name}
              textContentType="givenName"
              returnKeyType="next"
              keyboardType="default"
              onChangeText={text => {
                this.setState({
                  name: text
                });
              }}
            />
            <Text style={styles.colorText}> Email</Text>
            <TextInput
              style={styles.search}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
              autoFocus={true}
              autoCorrect={false}
            />
            <Text style={styles.colorText}>Phone Number</Text>
            <TextInput
              style={styles.search}
              onChangeText={text => this.setState({ mob: text })}
              value={this.state.mob}
              autoFocus={true}
              autoCorrect={false}
            />
          </View>
        </ScrollView>
        <View style={{ position: 'relative', bottom: 0 }}>
          <View style={styles.flexContent}>
            <View style={styles.footerWrapperGrey}>
              <Text style={styles.footerText}>
                &#x20b9;{this.item.selectedItem.rs}
              </Text>
              <Text style={styles.footerTextsub}> Refundable Fare</Text>
            </View>
            <TouchableOpacity
              style={styles.footerWrapperRed}
              onPress={() =>
                this.props.navigation.navigate('Booked', {
                  flightHistory: this.item,
                  passengerDetails: this.state
                })
              }
            >
              <Text style={styles.footerText}>BOOK FLIGHT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
