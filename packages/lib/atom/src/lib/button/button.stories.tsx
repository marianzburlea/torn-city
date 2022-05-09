import { Story, Meta } from '@storybook/react';
import { themeTornSPA } from '@torn/theme';
import { ThemeProvider } from 'styled-components';
import { Button } from '.';
import { Flex } from '../flex';

export default {
  component: Button,
  title: 'Button/Default/New',
  children: 'Click me',
  label: 'Click me',
  variant: 'primary',
  onClick: () => console.log('Test storybook click'),

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={themeTornSPA}>
    <Button {...args} />
  </ThemeProvider>
);

const SizeTemplate: Story = (args) => (
  <ThemeProvider theme={themeTornSPA}>
    <Flex gap={16}>
      <Button {...args} size="xs" />
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
      <Button {...args} size="xl" />
      <Button {...args} size="xxl" />
    </Flex>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  Template: 'primary',
  onClick: () => console.log('Test storybook click'),
};

export const Size = SizeTemplate.bind({});
Size.args = {
  label: 'Click me second',
  variant: 'success',
  onClick: () => console.log('Test storybook click success'),
};
