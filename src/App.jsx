import React,{useEffect,useState} from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { useDispatch } from 'react-redux';
import { logout } from './redux/userRedux';
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

  const dispach = useDispatch()
  const timeout = 1800000;
  const [remaining, setRemaining] = useState(timeout)
  const [lastActive, setLastActive] = useState(+new Date())
  const [isIdle, setIsIdle] = useState(false)

  const handleOnActive = () => setIsIdle(false)
  const handleOnIdle = () => setIsIdle(true)

  const {getRemainingTime,getLastActiveTime } = useIdleTimer({timeout,onActive: handleOnActive,onIdle: handleOnIdle})

  

  useEffect(() => {
    setRemaining(getRemainingTime())
    setLastActive(getLastActiveTime())

    setInterval(() => {
      setRemaining(getRemainingTime())
    }, 1000)
  }, [])

  useEffect(() => {
   if( remaining === 0  ) {
    dispach(
      logout({currentUser:null}))
   }
  }, [remaining])
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