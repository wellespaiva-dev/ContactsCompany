import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

////////////// PAGES ////////////////////
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import NewContact from '../pages/NewContact'
import ProfileCompany from '../pages/ProfileCompany'
import EditContact from '../pages/EditContact'
///////////////// END PAGES ////////////

import { StatusBar } from 'react-native';
import colors from '../assets/colors';
import ContactsProvider from '../hooks/ContactsContext';

const Stack = createStackNavigator();

function ScreenContacts(){
    return(
        <Stack.Navigator
            initialRouteName='Contacts'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Contacts' component={Contacts} />
            <Stack.Screen name='NewContact' component={NewContact} />
            <Stack.Screen name='ProfileCompany' component={ProfileCompany} />
            <Stack.Screen name='EditContact' component={EditContact} />
        </Stack.Navigator>
    );
}

export default function App(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor={colors.blue}/>
            <ContactsProvider>
                <Stack.Navigator
                    initialRouteName=''
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='ScreenContacts' component={ScreenContacts} />
                </Stack.Navigator>
            </ContactsProvider>
        </NavigationContainer>
    );
} 