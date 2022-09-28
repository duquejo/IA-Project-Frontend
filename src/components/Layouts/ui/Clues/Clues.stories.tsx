import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Clues as DefaultComponent } from './Clues';

export default {
  title: 'layout/ui/Clues',
  component: DefaultComponent,
  argTypes: {},  
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const Clues = Template.bind({});