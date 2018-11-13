import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    top: 0,
    backgroundColor: '#1E90FF',
    height: '100%',
    paddingBottom: 30
  },
  card: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flexContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff'
  },
  label: {
    color: 'rgba(255,255,255, 0.4)',
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'left'
  },
  labelValue: {
    color: '#fff',
    fontSize: 19,
    marginTop: 5
  },
  subheaderText: {
    color: '#fff',
    fontSize: 36
  },
  barCode: {
    width: 300,
    marginLeft: 40,
    marginTop: 100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    height: 50
  },
  flightBookinText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    marginLeft: -10
  }
});
