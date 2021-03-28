// import React,{Component} from 'react';
// import {View,Text} from 'react-native';

// export default class App extends Component
// {
//   render()
//   {
//     return(
//       <View> 
      
//         <Text>welcome to our program</Text>

//         </View>
//         );
//     }
// }

import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

class Add extends Component {
  render() {
    let data = [
      {      value: 'Banana',    },
      {      value: 'Mango',    },
      {      value: 'Pear',    }];
    
    return (      
      <Dropdown        
      label='Favorite Fruit'        
      data={data}      
  		/>    
		);  
	}
}