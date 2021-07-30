import React, { useState } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";
import { MovieDetail } from '../interface/MovieInterface';

const DetailsScreen = ({navigation, route}:any) => {

    // const navigation = useNavigation();
  const movie = route.params.movie;
  const [movieDetails, setMovieDetails] = useState<MovieDetail>();

  useEffect(() => {
    let newMovie = movie.title.replace(' ','+');
    const xhr = new XMLHttpRequest();
    // xhr.open('GET',"http://www.omdbapi.com/?apikey=cc456efe&t=Star+Wars&y=1977");
    switch (movie.title){
      case 'Star Wars':{
        xhr.open('GET',"http://www.omdbapi.com/?apikey=cc456efe&t=Star+Wars");
        break;
      }
      case 'Black Panther':{
        xhr.open('GET',"http://www.omdbapi.com/?apikey=cc456efe&t=Black+Panther");
        break;
      }
      case 'The Matrix':{
        xhr.open('GET',"http://www.omdbapi.com/?apikey=cc456efe&t=The+Matrix");
        break;
      }
      default:{
        xhr.open(`GET`,`http://www.omdbapi.com/?apikey=cc456efe&t=${newMovie}`);
        console.log(newMovie);
      }
    }
    xhr.send();
    xhr.onload =  () =>{
      if(xhr.status== 200 && xhr.readyState == xhr.DONE){
        let response:MovieDetail = JSON.parse(xhr.response) 
        setMovieDetails(response);
      }else{
        console.log(`HTTP REQUEST Failes ${xhr.status}`);
      }
    }
  }, [])

  return (
    
    <View style={styles.mainView}>
      <Image
        style={styles.imageMovie}
        source={{uri: movieDetails?.Poster}}
      />
      <Text style={{fontSize:20, fontWeight:'bold'}}>{ movieDetails == null ? "":  movieDetails?.Title}</Text>
      <Text style={{fontSize:12, fontWeight:'bold', opacity:0.5}}>{ movieDetails == null ? "":  movieDetails?.Released}</Text>
      <Text>{ movieDetails == null ? "":  movieDetails?.Plot}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageMovie:{
    height:500,
    width:'100%'
  }
});


export default DetailsScreen;
