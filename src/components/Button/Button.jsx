import React from "react";
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ onClick, src, text, alt, curved, altText }) => {
    return (
        <StyledButton onClick={onClick} srcSet={src} curved={curved} alt={altText}>
            <span>{text}</span>
            <img src={src} alt={alt} />
        </StyledButton>
    )
};

Button.defaultProps = {
    onClick: () => undefined,
    src: '',
    curved: false,
};

Button.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string,
    text: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    curved: PropTypes.bool,
};

export default Button;