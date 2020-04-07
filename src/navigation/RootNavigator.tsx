import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { DEFAULT_RED, DEFAULT_WHITE } from '../style/appStyle'

import PokeDetailScreen from '../screen/PokeDetailScreen';
import PokeListScreen from '../screen/PokeListScreen';

const Stack = createStackNavigator();

interface RootProps {
}

function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Lista"
                    component={PokeListScreen}
                    options={{
                        title: 'Escolha seu Time Pokemon',
                        headerStyle: {
                            backgroundColor: DEFAULT_RED,
                        },
                        headerTintColor: DEFAULT_WHITE,
                        headerTitleStyle: {
                            fontFamily: 'Verdana',
                        }
                    }}
                />
                <Stack.Screen name="Detalhes" component={PokeDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
