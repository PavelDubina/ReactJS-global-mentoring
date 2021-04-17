import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Modal, ModalProps } from './Modal'

export default {
  title: 'MyStorybook/Modal',
  component: Modal,
} as Meta

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.querySelector('body')!.appendChild(modalRoot)

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Example title',
  children: null,
  onClose: () => null,
}
