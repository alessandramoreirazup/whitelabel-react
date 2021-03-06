import React, { FC } from 'react';
import BlockElement from './elements/Block';
import TextElement from './elements/Text';

interface ButtonProps {
  text: string;
  type: 'accent' | 'default' | 'text';
  size?:
    | 'xxx-small'
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'xx-large'
    | 'xxx-large';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, type, size, disabled }) => {
  const buttonStyle = [type, size || 'medium', disabled ? 'disabled' : '']
    .join(' ')
    .trim();

  return (
    <BlockElement type="submit" className={buttonStyle} disabled={disabled}>
      <span>
        <TextElement className={buttonStyle}>{text}</TextElement>
      </span>
    </BlockElement>
  );
};

export default Button;
