import React, { useState } from "react";
import "./index.css";
import Home from ".//Home";
import Form from ".//Form";
import { Route, Link, Switch } from "react-router-dom";

export default function App() {
  const [pizza, setPizza] = useState("");

  return (
    <div className='App'>
      <nav>
        <div>
          {" "}
          <h1 className='store-header'>Lambda Pizza</h1>
        </div>
        <div className='nav-links'>
          <Link to='/'>Home</Link>

          <Link to='/pizza'>Order a Yummy Pizza!</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form pizza={pizza} />
        </Route>

        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
