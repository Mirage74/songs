import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Mainpage from './components/mainpage'
import EditSong from './components/layout/editsong'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div id="root">
            <Switch>
              <Route
                exact path="/"
                render={(props) => <Mainpage {...props} />}
              />
              <Route
                exact path="/editsong/:id"
                render={(props) => <EditSong {...props} />}
              />              
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}


export default App
