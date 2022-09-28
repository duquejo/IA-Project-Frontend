import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Buttons as DefaultComponent } from './Buttons';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

export default {
  title: 'layout/ui/Buttons',
  component: DefaultComponent,
  argTypes: {},
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],  
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = (args) => <DefaultComponent {...args}/>;

export const Buttons = Template.bind({});