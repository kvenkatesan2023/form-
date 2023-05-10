import { View, Text ,StyleSheet,TextInput,Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from "./config"
import {ref,onValue} from 'firebase/database'




const Fatch=()=>{
    const[title,setTitle]=useState([]);

    useEffect(() => {
      // Code to fetch data and set it to state
      const starCountRef = ref(db, 'posts/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const newPosts = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
  
        }));
        console.log(newPosts);
        setData(newPosts);
      });
  
    }, []);






return(
    <View>
       <Text>{Firstname}</Text>
    </View>
)
}
export default Fatch