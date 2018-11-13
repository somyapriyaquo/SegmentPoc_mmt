import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    top: 0,
    backgroundColor: '#fff',
    height: '100%',
    paddingBottom: 30,
    marginBottom: 10
  },
  containerFlightSearch: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    top: 40,
    backgroundColor: 'rgba(128,128,128,0.1)'
  },
  carauselPosition: {
    position: 'absolute',
    top: 60,
    zIndex: 100
  },
  container: {
    backgroundColor: '#00BFFF',
    width: '100%',
    height: 290,
    zIndex: 99,
    position: 'relative',
    top: 100
  },

  scrollView: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: '#28A6E5',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flex: 1,
    paddingVertical: 20
  },
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  carouselTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },

  carouselItemContainer: {
    flexDirection: 'row'
  },
  shadowBox: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    borderRadius: 5
    // shadowRadius: 10,
  },
  carouselItem: {
    flex: 1,
    backgroundColor: 'transparent',
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,

    borderRadius: 5
  },
  greetingText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 7,
    marginTop: 5,
    color: 'red'
  },
  carouselItemInfo: {
    backgroundColor: '#fffff0',
    left: 0,
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 70,
    shadowColor: 'gray'
  },
  carouselItemDontMiss: {
    backgroundColor: '#fff',
    shadowColor: 'gray',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: '#28A6E5',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  carouselItemTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
    marginLeft: 7,
    marginTop: 5
  },

  carouselItemSubtitle: {
    fontSize: 16,
    color: 'rgb(109, 104, 107)',
    marginTop: 0,
    marginLeft: 7,
    marginBottom: 0
  },
  imgText: {
    textAlign: 'center'
  },
  backgroundImage: {
    flex: 1
  },
  imgIcon: {
    width: 40,
    height: 40
  },
  alignIcon: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'space-between'
  },
  card: {
    paddingLeft: 10,
    paddingRight: 10
  },
  imgOffer: {
    height: 300,
    width: '100%'
  },
  header: {
    fontSize: 25,
    color: 'black',
    fontWeight: '800',
    marginLeft: 7,
    marginTop: 5
  },
  subheader: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginLeft: 7,
    marginBottom: 0
  },
  subheaderBottom: {
    fontSize: 16,
    color: 'black',
    padding: 20,
    marginLeft: 7
  },
  carouselItemTitleBottom: {
    fontSize: 16,
    color: 'black',
    marginLeft: 7,
    marginBottom: 0,
    padding: 20,
    fontWeight: '800'
  },
  offers: {
    fontSize: 16,
    color: 'black',
    marginTop: 0,
    marginLeft: 7,
    marginBottom: 0
  },
  code: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginLeft: 7,
    marginTop: 5,
    textAlign: 'center',
    color: 'red'
  },
  textNavigation: {
    textAlign: 'center',
    marginTop: 10
  },
  search: {
    height: 30,
    width: '100%',
    paddingLeft: 4,
    fontSize: 24,
    fontWeight: '800'
  },

  labelFrom: {
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  labelTo: {
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#DCDCDC',
    borderWidth: 1
  },
  labelDep: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'rgba(128,128,128,0.8)',
    fontSize: 16
  },
  labelDepReturn: {
    paddingVertical: 10,
    color: 'rgba(128,128,128,0.8)',
    fontSize: 16,
    paddingHorizontal: 10
  },
  datePicker: {
    height: 30,
    position: 'relative',
    top: -15
  },
  datePickerWrapper: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    borderColor: '#DCDCDC',
    borderBottomWidth: 1,
    width: '100%'
  },
  searchText: {
    color: '#ffff',
    fontWeight: '800'
  },
  searchButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign: 'center',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    position: 'absolute',
    top: 85,
    alignSelf: 'center',
    left: '45%'
  },
  class: {
    display: 'flex',
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  labelTraveller: {
    color: 'rgba(128,128,128,0.8)',
    fontSize: 16,
    marginRight: 40,
    alignItems: 'center'
  },
  labelDetails: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    alignItems: 'center',
    width: 120
  },
  labelCount: {
    fontSize: 36,
    fontWeight: '600',
    color: '#000',
    alignItems: 'center'
  },
  dontMisstext: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    margin: 15,
    marginTop: 50
  },
  headerHead: {
    width: '100%',
    backgroundColor: '#1E90FF',
    paddingLeft: 20,
    paddingRight: 30,
    paddingBottom: 10
  },
  subHeaderHead: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'flex-start',
    paddingRight: 30
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 24
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    marginLeft: 10,
    color: 'white'
  },
  hotdealWrapper: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '800',
    position: 'absolute',
    top: 10,
    left: 20
  },
  hotdealText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'normal'
  },
  buttonWrapper: {
    position: 'absolute',
    right: 10,
    bottom: 3,
    backgroundColor: '#1E90FF',
    height: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#1E90FF'
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    alignContent: 'center',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonTextRound: {
    color: '#000',
    fontSize: 14,
    alignContent: 'center',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '600'
  },
  buttonWrapperSearch: {
    backgroundColor: '#1E90FF',
    height: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#1E90FF',
    width: 150,
    margin: 20
  },
  buttonWrapperRound: {
    backgroundColor: '#FFF',
    height: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    width: 140,
    marginHorizontal: 10,
    marginVertical: 7
  },
  buttonWrapperRoundOne: {
    backgroundColor: '#1E90FF',
    height: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#1E90FF',
    width: 140,
    marginHorizontal: 10,
    marginVertical: 7
  },
  buttonTextOne: {
    color: '#fff',
    fontSize: 14,
    alignContent: 'center',
    marginTop: 3,
    textAlign: 'center',
    fontWeight: '800'
  },
  tripDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    borderRadius: 20,
    marginLeft: 30,
    marginVertical: 10,
    padding: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    backgroundColor: '#fff'
  },
  m_r: {
    marginRight: 50
  },
  roundTrip: {
    width: 120,
    marginBottom: 10,
    marginTop: -5,
    color: 'rgba(0,0,0,0.7)',
    paddingLeft: 10,
    textAlign: 'center'
  }
});
