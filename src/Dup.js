import React,{Component} from 'react';
import {View,Text, TextInput, Dimensions, StyleSheet, Button, TouchableOpacity} from 'react-native';


export default class Dup extends Component
{
  render()
  {
    return(
      <View> 
        <Text>Edit</Text>

        
  
        <TextInput style={styles.inputBox}
            
                onChangeText={(time) => this.setState({time})}
                underlineColorAndroid = "#9d9d9f"
                placeholder="Start time" 
                placeholderTextColor = "#9d9d9f"
                selectionColor="#fff"
                
                
                />

         <TextInput style={styles.inputBox}
            
            onChangeText={(time) => this.setState({time})}
            underlineColorAndroid = "#9d9d9f"
            placeholder="End time" 
            placeholderTextColor = "#9d9d9f"
            selectionColor="#fff"
          
            
            />

            
<View >
                           <TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')}
                            style={styles.button}

                           >
                           <Text style={styles.buttontext}>SAVE</Text>

                          </TouchableOpacity>

                        </View>
        </View>
        
           
           )
        
          }
          
      }
      
      const styles = StyleSheet.create({
        container: {

        height:'100%',
        width:'100%',
        backgroundColor:'black',
        textAlign: 'center',
        color:'green',
       
  
      },
      inputBox: {
          width: Dimensions.get('window').width,
          backgroundColor: '#000', 
          paddingHorizontal:25,
          fontSize: 16,
          color: '#fff',
          marginVertical: 10,
          marginTop:14,
          justifyContent: 'center',
          alignItems: 'center',
          
      },
          
          button: {
            alignItems: "center",
    borderWidth:5,
    borderColor: "black",
    backgroundColor: "limegreen",
    padding:10,
    marginTop:315,
          },
        }
        );