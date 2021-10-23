import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/">
            <Shop></Shop>
        </Route>
        <Route path="/order">
          <OrderReview></OrderReview>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
