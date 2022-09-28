import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainContainer as DefaultComponent } from './MainContainer';
import { Provider } from 'react-redux';
import { store } from '../../store';

export default {
  title: 'layout/MainContainer',
  component: DefaultComponent,
  argTypes: {},
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const MainContainer = Template.bind({});