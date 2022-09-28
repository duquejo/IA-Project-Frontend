import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title as DefaultComponent } from './Title';

export default {
  title: 'layout/global/Title',
  component: DefaultComponent,
  argTypes: {},  
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const Title = Template.bind({});