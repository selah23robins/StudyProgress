import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  progressContainer: {
    height: 30,
    backgroundColor: '#ddd',
    overflow: 'hidden',
    marginBottom: 20,
  },

  progressBar: {
    height: 30,
    backgroundColor: 'green',
  },

  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  row: {
    padding: 15,
    borderBottomWidth: 1,
  },

  rowText: {
    fontSize: 16,
  },
});
