import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component, { ButtonKeys } from './Button';

export default {
  title: 'Button',
  component: Component
};

export const Button = () => (
  <>
    <Component
      text={text('text', 'primaryボタン')}
      types={text('types', 'primary') as ButtonKeys}
    />
  </>
);
