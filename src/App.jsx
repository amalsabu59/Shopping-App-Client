
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

import { BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import { useSelector } from 'react-redux'
import Success from './pages/Success'
import Cartrzp from './pages/Cartrzp'

const App = () => {
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cartrzp />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login /> }
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/"/> : <Register /> }
        </Route>
      </Switch>
    </Router>
  )
}

export default App