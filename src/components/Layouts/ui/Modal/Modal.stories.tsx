import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal as DefaultComponent } from './Modal';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

export default {
  title: 'layout/ui/Modal',
  component: DefaultComponent,
  argTypes: {},
  args: {
    open: true
  },
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = (args) => <DefaultComponent { ...args }/>;

export const Modal = Template.bind({});