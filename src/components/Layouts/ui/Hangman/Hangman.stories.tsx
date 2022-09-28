import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hangman as DefaultComponent } from './Hangman';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

export default {
  title: 'layout/ui/Hangman',
  component: DefaultComponent,
  argTypes: {},
  decorators: [
    (story) => <Provider store={ store }>{ story() }</Provider>
  ],
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const Hangman = Template.bind({});