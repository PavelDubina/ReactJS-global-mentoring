import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Header, HeaderProps } from './Header'
import { Search } from '../Search/Search'
import { MovieDetails } from '../MovieDetails/MovieDetails'

export default {
  title: 'MyStorybook/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const withoutAnything = Template.bind({})
withoutAnything.args = {
  children: null,
}

export const withSearch = Template.bind({})
withSearch.args = {
  children: <Search />,
}

export const withMovieDetails = Template.bind({})
withMovieDetails.args = {
  children: <MovieDetails />,
}
