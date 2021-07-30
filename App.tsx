import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import ImageScreen from './src/screens/ImageScreen';
/*

*/
const App = () => {
  const Stack =  createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName='App_to_Home'
          screenOptions={
            {
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#31338c'} 
            }
          }
      >
          <Stack.Screen 
              name={'App_to_Home'} 
              component={HomeScreen}
              options={{
                title: 'Movie Time',
                headerTitleStyle:{
                  fontWeight: 'bold',
                  fontSize:30,

                }
              }}
          />
          <Stack.Screen 
              name={'Home_to_Details'} 
              component={DetailsScreen}
              options={
                ({route}:any)=>({title: route.params.movie.title})}
          />
          <Stack.Screen 
              name={'Details_to_Details'}  
              component={DetailsScreen}
              options={
                ({route}:any)=>({title: route.params.movie.title})}
          />
          <Stack.Screen 
              name={'ImageScreen'} 
              component={ImageScreen}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
    }
});