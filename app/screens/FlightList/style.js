import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    top: 0,
    backgroundColor: '#fff',
    height: '100%',
    paddingBottom: 30
  },
  header: {
    width: '100%',
    backgroundColor: '#1E90FF',
    paddingLeft: 20,
    paddingRight: 30
  },
  subHeader: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    paddingRight: 30
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 24
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800'
  },
  dateTraveller: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingLeft: 50,
    paddingRight: 40
  },
  travellerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5
  },
  userIcon: {
    height: 25,
    width: 20,
    marginLeft: 10
  },
  rs: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E90FF'
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#DCDCDC'
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center'
  },
  subWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },
  name: {
    paddingTop: 10,
    fontSize: 12
  },
  timings: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ml: {
    marginHorizontal: 15
  },
  stop: {
    textAlign: 'center',
    marginBottom: 10
  },
  textColor: {
    color: 'rgba(128,128,128,0.8)'
  },
  borderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  circle: {
    borderWidth: 1,
    height: 8,
    width: 8,
    borderRadius: 100,
    borderColor: 'rgba(128, 128, 128, 0.4)'
  },
  seperator: {
    width: 150,
    height: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)'
  }
});
