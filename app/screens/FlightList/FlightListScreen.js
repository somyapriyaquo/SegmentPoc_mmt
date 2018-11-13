import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from './style.js';
import { FlightListService } from './FlightListService.js';

export default class FlightListScreen extends React.Component {
  item;
  list;
  constructor(props) {
    super(props);
    this.state = {};
    const { navigation } = this.props;
    this.item = navigation.state.params;
    console.log('oooohhhh-->', this.item);
  }
  componentWillMount() {
    let FlightList = new FlightListService();
    this.list = FlightList.flightList();
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

            <Text style={styles.text}>{this.item.from}</Text>

            <Text style={styles.backArrow}>&#x2192;</Text>
            <Text style={styles.text}>{this.item.to}</Text>
          </View>

          <View style={styles.dateTraveller}>
            <Text style={styles.text}>{this.item.date}</Text>
            <View style={styles.travellerWrapper}>
              <Text style={styles.text}>1</Text>
              <Image
                source={require('../../assets/images/user-solid.png')}
                style={styles.userIcon}
              />
            </View>
          </View>
        </View>
        <View>
          <ScrollView>
            <View>
              {this.list.map((elem, index) => (
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => {
                    this.props.navigation.navigate('Details', {
                      journeyDetail: this.item,
                      selectedItem: elem
                    });
                  }}
                >
                  <View style={styles.rowWrapper}>
                    <View style={styles.subWrapper}>
                      <Image
                        source={elem.img}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={[styles.name, styles.textColor]}>
                        {elem.name}
                      </Text>
                    </View>
                    <View>
                      <View style={styles.timings}>
                        <Text style={styles.ml}>{elem.dep}</Text>
                        <Text style={[styles.ml, styles.textColor]}>
                          {elem.total}
                        </Text>
                        <Text style={styles.ml}>{elem.arr}</Text>
                      </View>
                      <View style={styles.borderWrapper}>
                        <View style={styles.circle} />
                        <View style={styles.seperator} />
                        <View style={styles.circle} />
                      </View>
                    </View>
                    <Text style={styles.rs}>
                      &#x20b9;
                      {elem.rs}
                    </Text>
                  </View>
                  <Text style={[styles.stop, styles.textColor]}>
                    {elem.stop}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
