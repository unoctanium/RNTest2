import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';

const RootLayout = () => {
	
	const scheme = useColorScheme();
	
	return (
		<>
			<IconRegistry icons={EvaIconsPack}/>
			<ApplicationProvider {...eva} theme={scheme === 'dark' ? eva.dark : eva.light}>
   			<Stack screenOptions={{ headerShown: false }} />
			</ApplicationProvider>
		</>
	);
};


export default RootLayout;