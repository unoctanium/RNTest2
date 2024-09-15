import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

const HomeScreen = () => {
	return(
	  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 	   <Text style={{ userSelect: "none" }} category='h1'>HOME</Text>
	  </Layout>
	);
};

export default HomeScreen

