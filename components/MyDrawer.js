import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './Settings';
import Home from './Home';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    );
}