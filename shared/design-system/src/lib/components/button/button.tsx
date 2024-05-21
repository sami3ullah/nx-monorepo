import React from 'react';
import {
  Button as ButtonComponent,
  type ButtonProps,
} from './button.component';

type Props = {
  children: React.ReactNode;
} & ButtonProps;

export const Button = ({ children, ...props }: Props) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
