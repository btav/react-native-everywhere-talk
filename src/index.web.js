import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('ReactNativeEverywhere', () => App);

AppRegistry.runApplication('ReactNativeEverywhere', {
  rootTag: document.getElementById("root")
});
