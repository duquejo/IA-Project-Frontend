import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User as DefaultComponent } from './User';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

export default {
  title: 'layout/ui/User',
  component: DefaultComponent,
  argTypes: {},
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const User = Template.bind({});