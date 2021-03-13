import React from "react";
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ onClick, iconRightSrcSet, text }) => {
    return (
        <StyledButton onClick={onClick} srcSet={iconRightSrcSet}>{text}</StyledButton>
    )
};

Button.defaultProps = {
    onClick: () => undefined,
    iconRightSrcSet: '',
};

Button.propTypes = {
    onClick: PropTypes.func,
    iconRightSrcSet: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default Button;