import React from 'react';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel'

type DotsCarouselProps = {
    length: number,
    currentIndex: number,
    maxIndicators?: number
}

export default function DotsCarousel(props: DotsCarouselProps) {
    
    return (
        <AnimatedDotsCarousel
            length={props.length}
            currentIndex={props.currentIndex}
            maxIndicators={props.maxIndicators ?? 4}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={{
                color: 'blue',
                margin: 3,
                opacity: 1,
                size: 8,
            }}
            inactiveIndicatorConfig={{
                color: 'grey',
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
    )
}
