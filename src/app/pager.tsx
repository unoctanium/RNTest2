import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, ViewPager } from '@ui-kitten/components';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

export default function PagerScreen() {
	
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
		<Layout
			style={styles.container}
			level='1'
			>
			<ViewPager
				selectedIndex={selectedIndex}
				onSelect={index => setSelectedIndex(index)}
			>
				<Layout
					style={styles.tab}
					level='2'
				>
					<Text category='h5'>USERS</Text>
				</Layout>
				<Layout
					style={styles.tab}
					level='2'
				>
					<Text category='h5'>ORDERS</Text>
				</Layout>
				<Layout
					style={styles.tab}
					level='2'
				>
					<Text category='h5'>TRANSACTIONS</Text>
				</Layout>
			</ViewPager>
			
			<AnimatedDotsCarousel
        length={3}
        currentIndex={selectedIndex}
        maxIndicators={4}
        interpolateOpacityAndColor={true}
        activeIndicatorConfig={{
          color: 'red',
          margin: 3,
          opacity: 1,
          size: 8,
        }}
        inactiveIndicatorConfig={{
          color: 'white',
          margin: 3,
          opacity: 0.5,
          size: 8,
        }}
        decreasingDots={[
          {
            config: { color: 'white', margin: 3, opacity: 0.5, size: 6 },
            quantity: 1,
          },
          {
            config: { color: 'white', margin: 3, opacity: 0.5, size: 4 },
            quantity: 1,
          },
        ]}
      />
			
			
		</Layout>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});