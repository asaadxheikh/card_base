import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react'; 
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducers from './src/reducers' 
 
 
import { NavigationContainer } from '@react-navigation/native'; 
import { View,Text, TouchableOpacity, SafeAreaViewBase, SafeAreaView, FlatList } from 'react-native'; 
   
import Main from './src/screens'
const store = createStore(rootReducers,applyMiddleware(thunk));
   
 
const App      = () => {
    
   
 
  return (
    <Provider store={store}>   
       <Main/>
    </Provider>
  ) 
};

 

export default App;
