export class HomeService {
  app_list = [];
  offer_list = [];
  hotDeals() {
    this.app_list = [
      {
        name: 'Domestic Flights',
        desc: 'Grand Diwali Dhamaka !',
        offers: 'Up to Rs1,500 OFF on Domestic Flights ',
        code: 'MMTLONGWEEKEND',
        img: 'https://promos.makemytrip.com/store/Flight-360X140-25072018.jpg',
        text: 'Book Now!'
      },
      {
        name: 'Domestic Hotels',
        desc: 'Diwali Dhamaka Sale!',
        offers: 'Flat 30% OFF* on Domestic Hotels! ',
        code: 'DEALGRAB',
        img: 'https://promos.makemytrip.com/store/diwali-360x140-06112018.jpg',
        text: 'Explore !'
      },
      {
        name: 'Activities',
        desc: 'Launches MyExperience',
        offers: 'Buy 1 Get 1 Free on 5-star Hotel Buffets',
        code: '',
        img: 'https://promos.makemytrip.com/store/Flight-360X140-25072018.jpg',
        text: 'View Details'
      },
      {
        name: 'International Hotels',
        desc: 'This awesome Deal ',
        offers: 'Grab Upto 25% Instant Discount* on International Hotels',
        code: 'INTLCOMBO',
        img:
          'https://imgak.mmtcdn.com/mi8/images/slideshow/360x140-MyBusiness-12012018.jpg',
        text: 'Hurry!'
      },
      {
        name: 'Domestic Hotels',
        desc: 'Diwali Dhamaka Sale is on!',
        offers: 'Flat 30% OFF* on Domestic Hotels! ',
        code: 'DEALGRAB',
        img: 'https://promos.makemytrip.com/store/diwali-360x140-06112018.jpg',
        text: 'Explore !'
      },
      {
        name: 'Flights Offers',
        desc: 'Travelling with a gang?',
        offers: 'Book Flights and gets Rs2500 Instant Discount',
        code: 'FLYMORE',
        img: 'https://promos.makemytrip.com/store/goup-360x140-11102018.jpg',
        text: 'View Details'
      }
    ];
    return this.app_list;
  }
}
