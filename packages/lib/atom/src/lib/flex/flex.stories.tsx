import { Story, Meta } from '@storybook/react';
import { themeTornSPA } from '@torn/theme';
import { ThemeProvider } from 'styled-components';
import { Flex } from '.';

export default {
  component: Flex,
  title: 'Flex',
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={themeTornSPA}>
    <Flex {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
