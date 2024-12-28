import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Edititeminfo from './views/edititeminfo'
import Frame1618868946 from './views/frame1618868946'
import Frame1618868941 from './views/frame1618868941'
import Alert from './views/alert'
import EditTermsViewattachments from './views/edit-terms-viewattachments'
import ViewPending from './views/view-pending'
import Alert1 from './views/alert1'
import Frame1618868940 from './views/frame1618868940'
import EditTermsViewattachments1 from './views/edit-terms-viewattachments1'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Edititeminfo} exact path="/edititeminfo" />
        <Route component={Frame1618868946} exact path="/frame1618868946" />
        <Route component={Frame1618868941} exact path="/frame1618868941" />
        <Route component={Alert} exact path="/alert" />
        <Route
          component={EditTermsViewattachments}
          exact
          path="/edit-terms-viewattachments"
        />
        <Route component={ViewPending} exact path="/" />
        <Route component={Alert1} exact path="/alert1" />
        <Route component={Frame1618868940} exact path="/frame1618868940" />
        <Route
          component={EditTermsViewattachments1}
          exact
          path="/edit-terms-viewattachments1"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
