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
    justifyContent: 'flex-start',
    paddingRight: 30,
    paddingVertical: 10
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 24
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    marginLeft: 10
  },

  subheadingWrapper: {
    padding: 16
  },
  flexContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  lightText: {
    color: '#808080',
    marginTop: 5
  },
  darkText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18
  },
  card: {
    position: 'relative',
    top: 20,
    shadowColor: '#808080',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  contact: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  yourText: {
    fontSize: 15,
    color: 'grey',
    paddingLeft: 20
  },

  search: {
    height: 30,
    width: '100%',
    borderBottomWidth: 10,
    paddingLeft: 10,
    borderBottomColor: 'red',
    fontSize: 18,
    fontWeight: '600',
    margin: 10,
    backgroundColor: 'yellow'
  },
  submitButton: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: '800'
  },
  footerWrapperGrey: {
    width: '50%',
    backgroundColor: 'rgba(0,0,0,0.83)',
    height: 60,
    paddingLeft: 20,
    paddingTop: 10
  },
  footerText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18
  },
  footerWrapperRed: {
    backgroundColor: 'red',
    width: '50%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  footerTextsub: {
    fontSize: 12,
    color: 'gray'
  },
  colorText: {
    color: 'rgba(128, 128, 128, 0.8)',
    fontSize: 19
  }
});
