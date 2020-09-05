import React, { FC } from 'react';
import styled from 'styled-components';
import whitelabel from '../../whitelabel';

interface ButtonProps {
  text: string;
  type: 'default' | 'accent' | 'text';
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 0,

  // Type
  '&.accent': whitelabel?.button?.type?.accent?.button,
  '&.default': whitelabel?.button?.type?.default?.button,
  '&.text': whitelabel?.button?.type?.text?.button,

  //  Size
  '&.xxx-small': whitelabel?.button?.size?.xxxSmall?.button,
  '&.xx-small': whitelabel?.button?.size?.xxSmall?.button,
  '&.x-small': whitelabel?.button?.size?.xSmall?.button,
  '&.small': whitelabel?.button?.size?.small?.button,
  '&.medium': whitelabel?.button?.size?.medium?.button,
  '&.large': whitelabel?.button?.size?.large?.button,
  '&.x-large': whitelabel?.button?.size?.xLarge?.button,
  '&.xx-large': whitelabel?.button?.size?.xxLarge?.button,
  '&.xxx-large': whitelabel?.button?.size?.xxxLarge?.button,
});

const StyledText = styled.span({
  fontFamily: '"Segoe UI", serif',
  fontStyle: 'normal',
  fontWeight: 'normal',
  // fontSize: 14,
  // lineHeight: 20,

  // Type
  '&.accent': whitelabel?.button?.type?.accent?.text,
  '&.default': whitelabel?.button?.type?.default?.text,
  '&.text': whitelabel?.button?.type?.text?.text,

  '&.xxx-small': whitelabel?.button?.size?.xxxSmall?.text,
  '&.xx-small': whitelabel?.button?.size?.xxSmall?.text,
  '&.x-small': whitelabel?.button?.size?.xSmall?.text,
  '&.small': whitelabel?.button?.size?.small?.text,
  '&.medium': whitelabel?.button?.size?.medium?.text,
  '&.large': whitelabel?.button?.size?.large?.text,
  '&.x-large': whitelabel?.button?.size?.xLarge?.text,
  '&.xx-large': whitelabel?.button?.size?.xxLarge?.text,
  '&.xxx-large': whitelabel?.button?.size?.xxxLarge?.text,
});

const Button: FC<ButtonProps> = ({ text, type, size }) => {
  const buttonStyle = [type, size || 'medium'].join(' ').trim();

  return (
    <StyledButton type="submit" className={buttonStyle}>
      <StyledText className={buttonStyle}>{text}</StyledText>
    </StyledButton>
  );
};

export default Button;
