import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { styles } from '../style';
import { SearchFlightService } from './SearchFlightService.js';
import DatePicker from 'react-native-datepicker';
import Carousel from 'react-native-snap-carousel';

const carouselItemWidth = Dimensions.get('window').width - 40;
const carouselItemHeight = carouselItemWidth / 1.8;

export default class SearchFlightsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
    this.state = {
      from: 'DEL',
      to: 'MUM',
      date: '14-Nov-2018'
    };
  }

  componentWillMount() {
    let FlightSearch = new SearchFlightService();
    let offers = FlightSearch.dontMiss();
    this.setState({ data: offers });
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

            <Text style={styles.text}>Flight Search</Text>
          </View>
        </View>
        <View style={styles.tripDetail}>
          <TouchableOpacity>
            <View style={styles.buttonWrapperRoundOne}>
              <Text style={styles.buttonTextOne}>ONE WAY</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonWrapperRound}>
            <Text style={styles.buttonTextRound}>ROUNDTRIP</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.labelFrom}>
            <Text style={{ color: 'rgba(128,128,128,0.8)', fontSize: 15 }}>
              FROM
            </Text>
            <TextInput
              style={styles.search}
              onChangeText={text => this.setState({ from: text })}
              value={this.state.from}
              autoFocus={true}
            />
          </View>
          <View style={styles.labelTo}>
            <Text style={{ color: 'rgba(128,128,128,0.8)', fontSize: 15 }}>
              TO
            </Text>
            <TextInput
              style={styles.search}
              onChangeText={text => this.setState({ to: text })}
              value={this.state.to}
              autoFocus={true}
            />
          </View>
          <View style={styles.datePickerWrapper}>
            <View>
              <Text style={styles.labelDep}>DEPARTURE</Text>
              <DatePicker
                style={styles.datePicker}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="DD-MMM-YYYY"
                minDate={this.state.date}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                allowFontScaling={true}
                customStyles={{
                  dateIcon: { display: 'none' },
                  dateInput: { borderWidth: 0 }
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
            <View style={styles.m_r}>
              <Text style={styles.labelDepReturn}>RETURN</Text>
              <Text style={styles.roundTrip}>
                Book round trips for great savings
              </Text>
            </View>
          </View>

          <View style={styles.class}>
            <View>
              <Text style={styles.labelTraveller}>TRAVELLERS</Text>
              <Text style={styles.labelCount}>01</Text>
            </View>
            <View>
              <Text style={styles.labelTraveller}>CABIN CLASS</Text>
              <Text style={styles.labelDetails}>Economy Class</Text>
            </View>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() =>
                this.props.navigation.navigate('FlightList', this.state)
              }
            >
              <Text style={styles.searchText}>SEARCH</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerFlightSearch}>
            <Text style={styles.dontMisstext}>Don't Miss Out</Text>
            <View style={styles.scrollview}>{this.getCarousel()}</View>
          </View>
        </ScrollView>
      </View>
    );
  }

  getCarousel = () => {
    return (
      <View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          inactiveSlideScale={1.0}
          inactiveSlideOpacity={0.98}
          data={this.state.data}
          sliderWidth={Dimensions.get('window').width}
          renderItem={this._renderItem.bind(this)}
          itemWidth={carouselItemWidth}
          sliderHeight={carouselItemHeight}
          itemHeight={carouselItemHeight}
          hasParallaxImages={true}
          activeSlideAlignment={'center'}
        />
      </View>
    );
  };

  _renderItem({ item, index }) {
    return (
      <View
        style={[
          styles.carouselItemContainer,
          { width: carouselItemWidth, height: carouselItemHeight + 20 }
        ]}
      >
        {index > 0 ? (
          <View style={{ width: 12, height: carouselItemHeight + 80 }} />
        ) : null}
        <TouchableOpacity onPress={() => this.onItemTap(item)}>
          <View style={styles.carouselItemDontMiss}>
            <Text style={styles.carouselItemTitleBottom}>{item.name}</Text>
            <Text
              style={{
                textAlign: 'right',
                paddingHorizontal: 10,
                fontSize: 18,
                fontWeight: '600'
              }}
            >
              &#x2192;
            </Text>
            <Text style={styles.subheaderBottom}>{item.desc}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  onItemTap = item => {
    console.log(item);
    this.props.navigation.navigate('Offers', item);
  };
}
