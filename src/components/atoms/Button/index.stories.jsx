// @flow
import React from 'react';
import { ReduxProvider } from '@arpitmalik832/react-js-rollup-library';

import Button from './index';
import store from '../../../redux/store/store';

export default {
  title: 'Atoms/Button',
  component: (): React.Node => (
    <ReduxProvider store={store}>
      <Button />
    </ReduxProvider>
  ),
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};
