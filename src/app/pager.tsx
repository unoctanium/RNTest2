import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Pager } from '@/components/pager'

export default function PagerScreen() {

  return (
    <Layout
      level='1'
    >
      <Pager dots={true}>
        <Layout
          style={styles.tab}
          level='2'
        >
          <Text style={{ userSelect: "none" }} category='h5'>USERS</Text>
        </Layout>
        <Layout
          style={styles.tab}
          level='2'
        >
          <Text style={{ userSelect: "none" }} category='h5'>ORDERS</Text>
        </Layout>
        <Layout
          style={styles.tab}
          level='2'
        >
          <Text style={{ userSelect: "none" }} category='h5'>TRANSACTIONS</Text>
        </Layout>
      </Pager>
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