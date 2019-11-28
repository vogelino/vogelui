import * as React from 'react';
import Button from '../src/components/Button';

export default {
  title: 'Button',
};

export const text = () => <Button>Hello Button</Button>;

export const emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
