import './App.css';
import { Route, Switch } from 'react-router-dom'

//screen components
import Home from './screens/Home/Home';
import Products from './screens/Products/Products';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import EditProduct from './screens/EditProduct/EditProduct';
import Login from './screens/Login/Login';
import AddProduct from './screens/AddProduct/AddProduct';
import SignUp from './screens/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route exact path='/product/:id' component={ProductDetail} />
        <Route path='/product/edit/:id' component={EditProduct}/>
        <Route path='/add' component={AddProduct}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
