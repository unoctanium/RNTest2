import React, { Children } from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, ViewPager } from '@ui-kitten/components';
import { ChildrenWithProps } from '@ui-kitten/components/devsupport';
import DotsCarousel from './DotsCarousel';

type PagerProps = {
  dots?: boolean,
  children?: ChildrenWithProps<any>
}

export default function Pager(props: PropsWithChildren<PagerProps>) {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const getLength = (children: any) => {
    if (typeof children !== void (0)) {
      if (Array.isArray(children)) {
        return(Object.keys(children).length)
      } else {
        return (1)
      }
    }
    return(0)
  }

  return (
    <>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
      >
        {props.children}
      </ViewPager>

      <Layout
        level='2'
        style={styles.dots}
      >
      {
        props.dots ?
          <DotsCarousel
            length={getLength(props.children)}
            currentIndex={selectedIndex}
          />
          :
          null
      }
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  dots: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});