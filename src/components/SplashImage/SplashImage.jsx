import React from "react";
import LaunchImageSmall from '../../assets/img/launch-home.png';
import LaunchImageMedium from '../../assets/img/launch-home@2x.png';
import LaunchImageLarge from '../../assets/img/launch-home@3x.png';
import { SplashContainer } from './SplashImage.styled';

const SplashImage = () => (
    <SplashContainer>
        <img src={LaunchImageSmall} 
            srcset={`${LaunchImageSmall} 768px, ${LaunchImageMedium} 1024px, ${LaunchImageLarge} 1440px`}
            alt="spacex-launch" />
    </SplashContainer>
);

export default SplashImage;