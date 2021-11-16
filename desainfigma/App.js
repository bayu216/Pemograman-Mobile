import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './src/page/SplashScreen';
import LoginScreen from './src/page/LoginScreen';
import RegisterScreen from './src/page/RegisterScreen';
import HomeScreen from './src/page/HomeScreen';
import HistoryScreen from './src/page/HistoryScreen';
import ProfileScreen from './src/page/ProfileScreen';
import TopupScreen from './src/page/TopupScreen';
import QrScreen from './src/page/QrScreen';
import TransferScreen from './src/page/TransferScreen';
import TopupSuccessScreen from './src/page/TopupSuccessScreen';
import QrPaymentConfirm from './src/page/QrPaymentConfirm';
import PaymentSuccess from './src/page/PaymentSuccess';
import TransferConfirm from './src/page/TransferConfirm';
import TransferSuccess from './src/page/TransferSuccess';
import HomeIcon from './src/assets/icon/home.svg';
import ProfileIcon from './src/assets/icon/profile.svg';
import TransactionIcon from './src/assets/icon/transaction.svg';

// variable
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <HomeIcon
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <TransactionIcon
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <ProfileIcon
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerStyle: {backgroundColor: '#005690'}}}>
        {/* urutan no 1 adalah tampilan utama */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerTitle: 'Account Registration',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="TopupScreen"
          component={TopupScreen}
          options={{headerTitle: 'Top Up', headerTintColor: 'white'}}
        />
        <Stack.Screen
          name="QrScreen"
          component={QrScreen}
          options={{headerTitle: 'QR Payment', headerTintColor: 'white'}}
        />
        <Stack.Screen
          name="TransferScreen"
          component={TransferScreen}
          options={{headerTitle: 'Transfer Check', headerTintColor: 'white'}}
        />
        <Stack.Screen
          name="TopupSuccessScreen"
          component={TopupSuccessScreen}
          options={{headerTintColor: 'white', headerShown: false}}
        />
        <Stack.Screen
          name="QrPaymentConfirm"
          component={QrPaymentConfirm}
          options={{
            headerTitle: 'Payment Confirmation',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="PaymentSuccess"
          component={PaymentSuccess}
          options={{headerTintColor: 'white', headerShown: false}}
        />
        <Stack.Screen
          name="TransferConfirm"
          component={TransferConfirm}
          options={{
            headerTitle: 'Transfer Confirmation',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{headerTintColor: 'white', headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={BottomNav}
          options={{headerTintColor: 'white', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
