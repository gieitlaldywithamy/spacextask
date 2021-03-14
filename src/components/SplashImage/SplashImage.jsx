import React from "react";
import LaunchImageSmall from '../../assets/img/launch-home.png';
import LaunchImageMedium from '../../assets/img/launch-home@2x.png';
import LaunchImageLarge from '../../assets/img/launch-home@3x.png';
import { SplashContainer } from './SplashImage.styled';

const SplashImage = () => (
    <SplashContainer>
        <img src={LaunchImageSmall} 
            srcSet={`${LaunchImageSmall} 768w, ${LaunchImageMedium} 1024w, ${LaunchImageLarge} 1440w`}
            alt="" />
    </SplashContainer>
);

export default SplashImage;