import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  containerItem: {
    backgroundColor: '#fff',
    marginTop: 20,
    width: '100%'
  },
  buttonsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingBottom: 10,
    marginTop: 10,
},
editButton: {
  marginLeft: 10,
  height: 40,
  backgroundColor: 'blue',
  borderRadius: 10,
  padding: 10,
  fontSize: 12,
  elevation: 10,
  shadowOpacity: 10,
  shadowColor: '#ccc',
  alignItems: 'center'
},
deleteButton: {
  marginLeft: 10,
  height: 40,
  width: 40,
  backgroundColor: 'red',
  borderRadius: 10,
  padding: 10,
  fontSize: 12,
  elevation: 10,
  shadowOpacity: 10,
  shadowColor: '#ccc',
  alignItems: 'center'
},
textItem: {
  fontSize: 20,
},
containerList: {
  flex: 1,
  backgroundColor: '#00D928',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20
},
scrollContainer: {
  flex: 1,
  width: '100%'
},
itemsContainer: {
  marginTop: 10,
  padding: 20,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  alignItems: 'stretch',
  backgroundColor: '#fff'
},
titleList: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 50,
  marginBottom: 20
},
buttonContainer: {
  flexDirection: "row"
},
buttonsText: {
  marginLeft: 10,
  fontSize: 18,
  color: '#fff',
  fontWeight: 'bold',
}


});