import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Start,Login,Map,Menu } from '../screen';
import { Routes } from '../constants';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={Routes.START}
                    component={Start}
                    options={{ title: 'Start' }} />
                <Stack.Screen name={Routes.LOGIN} component={Login} />
                <Stack.Screen name={Routes.MAP} component={Map} />
                <Stack.Screen name={Routes.MENU} component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation



