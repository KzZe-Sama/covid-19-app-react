import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import Home from './components/Home/Home'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Axios from 'axios';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [user, userGet] = useState(null);
  useEffect(() => {
    Axios.get(`https://api.github.com/users/KzZe-Sama`)
      .then(data => {
        userGet(data.data)
      })

  })
  return (
    <>
      <Nav />
      
        <Container>
        <Switch>
          <Route path='/about'>
          <About data={user} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </Switch>
        </Container>

      


    </>
  );
}

export default App;
