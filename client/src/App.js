import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'

//screen components
import Home from './screens/Home/Home';
import Products from './screens/Products/Products';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import EditProduct from './screens/EditProduct/EditProduct';
import Login from './screens/Login/Login';
import AddProduct from './screens/AddProduct/AddProduct';
import SignUp from './screens/SignUp/SignUp';
import { verifyUser } from './services/users';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  
  // const clearUser = () => setUser(null)

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home user={user} />
        </Route>
        <Route path='/products'> 
          <Products user={user} />
        </Route>
        <Route exact path='/product/:id'>
          <ProductDetail user={user} />
        </Route>
        <Route path='/product/edit/:id'>
          <EditProduct />
        </Route>
        <Route path='/add'>
          <AddProduct />
        </Route>
        <Route path='/login'>
          <Login setUser={setUser} />
        </Route>
        <Route path='/signup'>
          <SignUp setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
