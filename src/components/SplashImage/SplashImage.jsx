import React from "react";
import LaunchImageSmall from '../../assets/img/launch-home.png';
import LaunchImageMedium from '../../assets/img/launch-home@2x.png';
import LaunchImageLarge from '../../assets/img/launch-home@3x.png';
import { SplashContainer } from './SplashImage.styled';

const SplashImage = () => (
    <SplashContainer>
        <source media="(min-width:768px)" srcSet={LaunchImageSmall} />
        <source media="(min-width:1024px)" srcSet={LaunchImageMedium} />
        <source media="(min-width:1440px)" srcSet={LaunchImageLarge} />
        <img src={LaunchImageSmall} alt="spacex-launch" />
    </SplashContainer>
);

export default SplashImage;