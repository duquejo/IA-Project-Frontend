import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CanvasContainer as DefaultComponent } from './CanvasContainer';
import { Provider } from 'react-redux';
import { store } from '../../store';

export default {
  title: 'canvas/CanvasContainer',
  component: DefaultComponent,
  argTypes: {},
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const CanvasContainer = Template.bind({});