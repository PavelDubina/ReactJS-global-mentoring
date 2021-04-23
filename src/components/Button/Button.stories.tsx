import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps, EStyleTypeBtn, EType } from './Button'

export default {
  title: 'MyStorybook/Buttons',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  styleType: EStyleTypeBtn.adding,
  children: '+ ADD MOVIE',
  type: EType.button,
}
