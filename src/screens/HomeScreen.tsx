import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = ({route}:any) => {

  const navigation = useNavigation();
  const [movie, setMovie] = useState<string>('');

  return (
    <View style={styles.mainView}>
      <Text style={{marginBottom:20, fontSize:20, fontWeight:'bold'}}>Movie Time</Text>
      <TouchableOpacity
      style={styles.touchableView}
        onPress={() => {
          navigation.navigate('Home_to_Details',{
            movie:{
              title: 'Star Wars',
              release: 1977,
              screenNumber : 1
            }
          })
        }}
      >
        <View>
          <Text style={styles.touchableText}>Star Wars</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.touchableView}
        onPress={() => {
          navigation.navigate('Home_to_Details',{
            movie:{
              title: 'Black Panther',
              release: 2018,
              screenNumber : 1
            }
          })
        }}
      >
        <View>
          <Text style={styles.touchableText}>Black Panther</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.touchableView}
        onPress={() => {
          navigation.navigate('Home_to_Details',{
            movie:{
              title: 'The Matrix',
              release: 1999,
              screenNumber : 1
            }
          })
        }}
      >
        <View>
          <Text style={styles.touchableText} >The Matrix</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.inputText}
        placeholder="Enter a movie"
        onChangeText={movie=> setMovie(movie)}
        defaultValue={movie}
     />
  <TouchableOpacity
      style={styles.touchableView}
        onPress={() => {
          navigation.navigate('Home_to_Details',{
            movie:{
              title: movie
            }
          })
        }}
      >
        <View>
          <Text style={styles.touchableText} >Search Movie</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableView:{
    marginBottom:30,
    width:150,
    height:50,
    alignItems:'center',
    backgroundColor:'#31338c',
    borderWidth:5,
    borderRadius:10
  },
  touchableText:{
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  inputText:{
    borderRadius:5,
    marginBottom:20,
    width:150,
    textAlign: 'center',
    height:50,
    borderWidth:2,
    borderColor:'black'
  }
});

export default HomeScreen;
