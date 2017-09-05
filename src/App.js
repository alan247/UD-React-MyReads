import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'


class BooksApp extends Component {

  state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        const stateObj = {}
        const stateNames = Object.keys(this.state)

        for(let name of stateNames) {
          stateObj[name] = books.filter((item) => item.shelf === name)
        }

        this.setState(stateObj)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
          />
        )}/>
        <Route exact path="/search" render={() => (
          <BookSearch/>
        )}/>
      </div>
    )
  }

}

export default BooksApp
