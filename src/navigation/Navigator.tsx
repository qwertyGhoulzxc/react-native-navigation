import React, { FC } from 'react'
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotesScreen from "../screens/NotesScreen";
import HomeScreen from "../screens/HomeScreen";
import SvgProfile from "../assets/svg/SvgProfile";

const Navigator: FC = () => {
  const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator()

  const TabStack = ()=>{
    return (
      <Tab.Navigator >
          <Tab.Screen name={'Home'} component={HomeScreen} options={{
            tabBarLabel:'Главная',
            tabBarIcon:({focused})=>(<SvgProfile color={focused?'red':'lightblue'} height={25} width={25}/>)
          }} />
          <Tab.Screen name={'Notes'} component={NotesScreen} options={{
            tabBarLabel:'Заметки',
            tabBarIcon:({focused})=>(<SvgProfile color={focused?'red':'lightblue'} height={25} width={25}/>)
          }} />
      </Tab.Navigator>
    )
  }


  return (
        <Stack.Navigator screenOptions={{
        headerShown:false}
        } initialRouteName={'App'}>
          <Stack.Screen name={'Tab'} component={TabStack}/>
          <Stack.Screen name={'Screen1'} component={Screen1} />
          <Stack.Screen name={'Screen2'} component={Screen2}/>
          <Stack.Screen name={'Profile'} component={ProfileScreen}/>
        </Stack.Navigator>

    )
  }

export default Navigator
