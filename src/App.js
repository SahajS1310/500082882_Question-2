import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainList from './components/TrainList';
import SingleTrain from './components/SingleTrain';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainList} />
        <Route path="/train/:trainNumber" component={SingleTrain} />
      </Switch>
    </Router>
  );
}
export default App;
