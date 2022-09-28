import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App as DefaultComponent } from './app';
import { Provider } from 'react-redux';
import { store } from '../store';

export default {
  title: 'App',
  component: DefaultComponent,
  argTypes: {},
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const App = Template.bind({});