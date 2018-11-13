export class SearchFlightService {
  offer_list = [];
  dontMiss() {
    this.offer_list = [
      {
        name: 'Up to ₹10,000 Instant Discount on International Flights',
        desc: 'Exclusively for HDFC Bank Debit and Credit Cards.',
        offers: '',
        code: '',
        img: 'https://promos.makemytrip.com/store/HeliTaxi-360X140-20092018.jpg'
      },
      {
        name: 'Up to ₹10,000 Instant Discount on International Flights',
        desc: 'Exclusively for HDFC Bank Debit and Credit Cards.',
        offers: '',
        code: '',
        img: 'https://imgak.mmtcdn.com/mi8/images/slideshow/HDFCINT_360x140.jpg'
      },
      {
        name: 'INTRODUCING BEST PRICE GUARANTEE on International Flights',
        desc:
          'Get the lowest fare on INTERNATIONAL FLIGHTS or 10X THE DIFFERENCE*!',
        offers: '',
        code: '',
        img: 'https://promos.makemytrip.com/store/BPG-IF-360x140-14082018.jpg'
      }
    ];
    return this.offer_list;
  }
}
