import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import {Provider} from 'react-redux';
// import store  from './src/api/store'
//     ReactDOM.render(
//         <Provider store = {store}>
//             <App />
//           </Provider>
//         );

    registerRootComponent(App);