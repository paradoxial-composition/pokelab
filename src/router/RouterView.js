import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokeDisplay from '../components/PokeDisplay';
import MoreDetails from '../components/MoreDetails';
import history from '../history';

const RouterView = () => {
  
    return (
      <Switch history={history}>
            <Route  path='/:name' component={MoreDetails} />
            <Route exact path='/' component={PokeDisplay}/>
      </Switch>
    );
  
}


export default RouterView;