import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { styles } from '../style.js';
import { HomeService } from './HomeService.js';
import Carousel from 'react-native-snap-carousel';

const carouselItemWidth = Dimensions.get('window').width - 40;
const carouselItemHeight = carouselItemWidth / 1.8;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
    imagesOffer = [
      { img: require('../../assets/images/icon.png'), text: 'Flights' },
      {
        img: require('../../assets/images/building-regular.png'),
        text: 'Hotels'
      },
      {
        img: require('../../assets/images/parachute-box-solid.png'),
        text: 'Holidays'
      },
      { img: require('../../assets/images/bus-alt-solid.png'), text: 'Bus' },
      { img: require('../../assets/images/car-solid.png'), text: 'Cabs' }
    ];
  }

  componentWillMount() {
    let Home = new HomeService();
    let deals = Home.hotDeals();
    this.setState({ data: deals }, () => {
      console.log('call==>', this.state);
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.alignIcon}>
          {imagesOffer.map((elem, index) => (
            <TouchableOpacity onPress={() => this.onMenuTap(index)}>
              <Image style={styles.imgIcon} source={elem.img} />
              <Text style={styles.textNavigation}>{elem.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.hotdealWrapper}>
            HOT <Text style={styles.hotdealText}>DEALS</Text>
          </Text>

          <ScrollView style={styles.scrollview}>
            {this.getCarousel()}
          </ScrollView>
        </View>
      </View>
    );
  }
  getCarousel = () => {
    return (
      <View style={styles.carauselPosition}>
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
          <View style={{ width: 12, height: carouselItemHeight + 20 }} />
        ) : null}
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={() => this.onItemTap(item)}
        >
          <View style={styles.carouselItem}>
            <Image style={styles.backgroundImage} source={{ uri: item.img }} />

            <View style={styles.carouselItemInfo}>
              <Text style={styles.carouselItemTitle}>{item.name}</Text>
              <Text style={styles.carouselItemSubtitle}>{item.desc}</Text>
              <Text style={styles.greetingText}>Code: {item.code}</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>{item.text}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  onMenuTap = index => {
    {
      index === 0 && this.props.navigation.navigate('FlightSearch');
    }
  };
  onItemTap = item => {
    console.log(item);
    this.props.navigation.navigate('Offers', item);
  };
}
