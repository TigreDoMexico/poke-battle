import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import PokeDetailScreen from '../screen/PokeDetailScreen';
import PokeListScreen from '../screen/PokeListScreen';

const Stack = createStackNavigator();

interface RootProps {
}

function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Lista" component={PokeListScreen}/>
                <Stack.Screen name="Detalhes" component={PokeDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
