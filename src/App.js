import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';

const App = () => {
const [pizza, setPizza] = useState("");
  return (
    <div>
        <h1>Lambda Eats</h1>
        <p>Order Pizza While You Code</p>
        <Link to='/'>Home</Link>

        <Link to='/pizza'>Create Your Pizza!</Link>
      
     
        <Switch>
          <Route path='/pizza'>
          <Form pizza={pizza} />
          </Route>
          <Route path='/' component={Home} />
        </Switch>
        
    </div>
      );
    };
    

export default App;
