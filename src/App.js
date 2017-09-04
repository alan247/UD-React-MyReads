import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'


class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList/>
        )}/>
        <Route exact path="/search" render={() => (
          <BookSearch/>
        )}/>
      </div>
    )
  }

}

export default BooksApp
