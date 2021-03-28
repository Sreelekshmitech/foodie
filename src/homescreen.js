import React, { Component } from 'react';
import {Text,StyleSheet, View,TextInput,Image,Button,TouchableOpacity} from 'react-native';

import {DrawerActions} from '@react-navigation/native';

export default class Homescreen extends Component {
 
  render() {

    return (
      <View style={styles.container}>
        
       <View style={styles.viewstylecontent1}>
       <Text style={styles.bottom}>welcome to home page</Text> 
         
                             
       </View>
       {/* <View >

     <TouchableOpacity onPress={() =>this.props.navigation.navigate('Edit')}
   style={styles.button1}
    
 >
   <Text style={styles.buttontext}>Edit</Text>
 
 </TouchableOpacity>

   
 </View>  */}

 {/* <View >

     <TouchableOpacity onPress={() =>this.props.navigation.navigate('Add')}
   style={styles.button2}
    
 >
   <Text style={styles.buttontext}>Add</Text>
 
 </TouchableOpacity>

   
 </View>  */}
     </View>
     
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
  },
  header:{
    flexDirection: 'row',
    marginBottom:5,
    marginTop:5,
    paddingBottom:5,
    height:40,
    paddingTop:5,
  },
  place:{
    color:'white',
    marginLeft:10,
    width:250,
  },
  cart:{
    marginLeft:25,
    flex:1,
  },
  body:{
    height:80,
  },
  text:{
    color:'#37af0c',
    fontSize: 30,
    paddingLeft:8,
  },
  searchfield:{
    flexDirection:'row',
    marginLeft:5,
    paddingTop:10,
    paddingBottom:10,
  },
  searchfieldicon:{
   paddingTop:5,
   paddingBottom:5,
   paddingRight:10,
   marginTop:5,
   marginLeft:5,
  },
  searchfieldtext:{
    paddingBottom:5,
    paddingTop:5,
    paddingLeft:5,
  },
  near:{
    color:'#4a4b50',
    fontSize:18,
    paddingLeft:8,
  },
  viewstyle:{
   height:140,
   borderRadius:10,
   borderWidth:1,
   marginLeft:10,
   marginRight:10,
  },
  imagebody:{
    flex:1,
    borderTopWidth:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden',
    opacity:0.7,
    height:140,
  },
  rate:{
    position:'absolute',
    backgroundColor:'lime',
    height:20,
    width:30,
    right:1,
    borderRadius:10,
    paddingLeft:6,
    marginRight:8,
    marginTop:8,
   },
   text1:{
    color:'white',
    fontSize:12,
  },
  resname:{
    position:'absolute',
    color:'white',
    marginTop:90,
    marginLeft:10,

  },
  text2:{
    color:'white',
  },
  viewstylecontent:{
   flexDirection:'row',
   backgroundColor:'#282a36',
   borderBottomWidth:1,
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10,
   marginLeft:11,
   marginRight:11,
   marginTop:-1,
   paddingTop:5,
   paddingLeft:5,
   height:50,
  },
  baseText:{
    color:'white',
    fontSize:12,
   },
   baseText1:{
     color:'white',
     fontSize:12,
     paddingLeft:60,
    },
    baseText2:{
     color:'white',
     fontSize:12,
     paddingLeft:50,
    },
    baseText3:{
     color:'#37af0c',
     fontSize:12,
     paddingLeft:50,
    },
    viewstylecontent1:{
    flexDirection:'row',
    marginLeft:11,
    marginRight:11,
    marginTop:-45,
    paddingTop:15,
    paddingLeft:5,
    },
    bottom:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    },
    bottom1:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    paddingLeft:10,
    },
    bottom2:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    paddingLeft:35,
    },
    bottom3:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    paddingLeft:40,
   },
   buttontext:{
    color:'#ffffff',
    fontSize:20,
   
},
   button1: {
    alignItems: "center",
    borderWidth:1,
    borderColor: "white",
    backgroundColor: "limegreen",
    padding:10,
    marginTop:215,
  },  

  // button2: {
  //   alignItems: "center",
  //   backgroundColor: "limegreen",
  //   padding:20,
  //   marginTop:55,
    
  // },  

  });