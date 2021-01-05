import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './screens/home/Home';
import Products from './screens/Products/Products';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import EditProduct from './screens/EditProduct/EditProduct';
import Login from './screens/Login/Login';
import AddProduct from './screens/AddProduct/AddProduct';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/product/:id' component={ProductDetail}/>
        <Route path='/product/edit/:id' component={EditProduct}/>
        <Route path='/product/add' component={AddProduct}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
