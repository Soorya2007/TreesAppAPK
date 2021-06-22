import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import DecisionScreen from "./screens/DecisionScreen";
import CutScreen from "./screens/CutScreen";
import PlantScreen from "./screens/PlantScreen";
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
const Stack = createStackNavigator();

function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="DecisionScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="DecisionScreen" component={DecisionScreen} />
        <Stack.Screen name="CutScreen" component={CutScreen} />
        <Stack.Screen name="PlantScreen" component={PlantScreen} />
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;