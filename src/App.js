import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'

export default class App extends Component {
  

  render() {
    return (
      <div>
        <Navbar title="Homepage"></Navbar>
        <NewsList></NewsList>
      </div>
    )
  }
}
