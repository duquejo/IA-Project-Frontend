import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UsedLetters as DefaultComponent } from './UsedLetters';

const usedLetters = [
  'A',
  'B',
  'D',
  'X',
  'Y',
  'O',
  'P'
];

export default {
  title: 'layout/ui/UsedLetters',
  component: DefaultComponent,
  argTypes: {},
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = (args) => <DefaultComponent {...args}/>;

export const UsedLetters = Template.bind({});

UsedLetters.args = {
  usedLetters
};