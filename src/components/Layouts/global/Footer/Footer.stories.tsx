import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer as DefaultComponent } from './Footer';

export default {
  title: 'layout/global/Footer',
  component: DefaultComponent,
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const Footer = Template.bind({});