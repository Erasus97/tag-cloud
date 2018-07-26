import React, { Component } from 'react';

import TagCloud from './components/TagCloud'
import TagInfo from './components/TagInfo'

import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import data from './data'

var dataIds = {}

data.forEach((val, i) => {
    dataIds[val.id] = i
})

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Route exact path='/' render={() => <TagCloud list={data}/>}/>
          <Route path='/:id' render={props => <TagInfo tag={data[dataIds[props.match.params.id]]}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;