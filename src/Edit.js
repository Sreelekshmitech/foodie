import React, { Component } from 'react';
import {Text,StyleSheet, View,TextInput,Image,Button,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {DrawerActions} from '@react-navigation/native';
import { List } from 'react-native-paper';

// import firebase from 'firebase';

export default class Edit extends Component {
  // componentWilMount(){
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyCKXIaaB9YCJDrwqgXO-quKjLqLBIcLOmI",
  //     authDomain: "reactnativedatabase-a3a36.firebaseapp.com",
  //     projectId: "reactnativedatabase-a3a36",
  //     storageBucket: "reactnativedatabase-a3a36.appspot.com",
  //     messagingSenderId: "139824027409",
  //     appId: "1:139824027409:web:2c81569c94bdd90ee79eb0",
  //     measurementId: "G-RVTF3XEBYB"
  //   };
    
  //   firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
  //   firebase.database().ref('users/001').set(
  //     {
  //       name: 'sree',
  //       age: 24
  //     }
  //   ).then(()=> {
  //     console.log('inserted');
  //   }
  //   ).catch((error)=> {
  //     console.log('error');

  //   })
  // }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}> 
         <Icon name='navicon' size={26} color='white'onPress={() =>
                          this.props.navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        }/>
                        </View>
           
         
<View>
           <List.Item 
           titleStyle={{color: 'green'}}
    title="Porotta"
    
      right={props => <List.Icon {...props}  icon="delete" 
     size={20}
     color="#31930b" 

     />}
      left={props => <List.Icon {...props}  icon="pencil"
     size={20}
     color="#31930b"
     
      />}onPress={() => this.props.navigation.navigate("Dup")}
/>
 
           </View>
           <View>
           <List.Item 
           titleStyle={{color: 'green'}}
    title="Chappathi"

    right={props => <List.Icon {...props}  icon="delete"
     size={20}
     color="#31930b"
      />}
      left={props => <List.Icon {...props}  icon="pencil"
      
     size={20}
     color="#31930b"
      />}onPress={() => this.props.navigation.navigate("Dup")}

  />
           </View>
           <View>
           <List.Item 
           titleStyle={{color: 'green'}}
    title="Butternan"
       right={props => <List.Icon {...props}  icon="delete"
     size={20}
     color="#31930b"
      />}
      left={props => <List.Icon {...props}  icon="pencil"
     size={20}
     color="#31930b"
      />}onPress={() => this.props.navigation.navigate("Dup")}

  />
           </View>
           <View>
           <List.Item 
           titleStyle={{color: 'green'}}
    title="Appam"
       right={props => <List.Icon {...props}  icon="delete"
     size={20}
     color="#31930b"
      />}
      left={props => <List.Icon {...props}  icon="pencil"
     size={20}
     color="#31930b"
      />}onPress={() => this.props.navigation.navigate("Dup")}

  />
           </View>
           <View>
           <List.Item 
           titleStyle={{color: 'green'}}
    title="Burger"
       right={props => <List.Icon {...props}  icon="delete"
     size={20}
     color="#31930b"
      />}
      left={props => <List.Icon {...props}  icon="pencil"
      
     color="#31930b"
      />}onPress={() => this.props.navigation.navigate("Dup")}

  />
           </View>
           <View>
           <List.Item 
           titleStyle={{color: 'green'}}
    title="Sandwich"
       right={props => <List.Icon {...props}  icon="delete"
     size={20}
     color="#31930b"
      />}
      left={props => <List.Icon {...props}  icon="pencil"
     size={20}
     color="#31930b"
      />}onPress={() => this.props.navigation.navigate("Dup")}

  />
           </View>
           <View>
           <List.Item 
           titleStyle={{color: 'green'}}
    title="Pizza"
       right={props => <List.Icon {...props}  icon="delete"
     size={20}
     color="#31930b"
      />}
      left={props => <List.Icon {...props}  icon="pencil"
     size={20}
     color="#31930b"
      />}onPress={() => this.props.navigation.navigate("Dup")}

  />
           </View>

                        <View >
                           <TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')}
                            style={styles.button}

                           >
                           <Text style={styles.buttontext}>Cancel</Text>

                          </TouchableOpacity>

                        </View>


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
  
   button: {
    alignItems: "center",
    backgroundColor: "limegreen",
    padding: 7,
    marginTop:215,
    borderWidth:2,
    borderColor: "white",
  },
  });