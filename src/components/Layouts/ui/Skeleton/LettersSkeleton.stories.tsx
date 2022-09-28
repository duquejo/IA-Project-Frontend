import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkeletonLetters as DefaultComponent } from './SkeletonLetters';

export default {
  title: 'layout/ui/LettersSkeleton',
  component: DefaultComponent,
  argTypes: {},
} as ComponentMeta<typeof DefaultComponent>;

const Template: ComponentStory<typeof DefaultComponent> = () => <DefaultComponent />;

export const LettersSkeleton = Template.bind({});