import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MovieCard, MovieCardProps } from './MovieCard'

export default {
  title: 'MyStorybook/MovieCard',
  component: MovieCard,
} as Meta

const Template: Story<MovieCardProps> = (args) => (
  <div style={{ width: '260px', height: '340px' }}>
    <MovieCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Avengers',
  genres: ['comedy', 'action', 'adventure'],
  date: '2013',
  poster: 'https://image.tmdb.org/t/p/w500/9QA8rjbMqPcJXdHWEZE4Nxvktgx.jpg',
  id: 1,
  getMovie: () => null,
  handleMovieDetails: () => null,
}
