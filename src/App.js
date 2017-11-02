import React from 'react'

import { emojify } from 'react-emojione'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Header from './components/header'
import Menu from './components/menu'
import Show from './pages/show'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header title="emoji app" />
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/:emoji" component={Show} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
