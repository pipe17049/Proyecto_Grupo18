import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/products/showProducts/ShowProducts.css';
import Login from './components/login/Login';
import Products from './components/products/products/Products';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Products} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
