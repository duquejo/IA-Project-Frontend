import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HangmanContainer as DefaultComponent } from './HangmanContainer';
import { Provider } from 'react-redux';
import { store } from '../../../store';

export default {
  title: 'layout/ui/HangmanContainer',
  component: DefaultComponent,
  argTypes: {},
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = (args) => <DefaultComponent { ...args }/>;

export const HangmanContainer = Template.bind({});

HangmanContainer.args = {
  usedLetters: [ 'A', 'B', 'C' ],
  word: null
}