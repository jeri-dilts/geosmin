import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

//screen components
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import EditProduct from "./screens/EditProduct/EditProduct";
import Login from "./screens/Login/Login";
import AddProduct from "./screens/AddProduct/AddProduct";
import SignUp from "./screens/SignUp/SignUp";
import { verifyUser } from "./services/users";
import SignOut from "./screens/SignOut/SignOut";
import AboutUs from './screens/AboutUs/AboutUs';
import ContactUs from "./screens/ContactUs/ContactUs";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/products">
          <Products user={user} />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail user={user} />
        </Route>
        <Route path="/product/edit/:id">
          <EditProduct />
        </Route>
        <Route path="/add">
          <AddProduct user={user} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/signout">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route path="/aboutus">
          <AboutUs user={user} />
        </Route>
        <Route path="/contactus">
          <ContactUs user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
