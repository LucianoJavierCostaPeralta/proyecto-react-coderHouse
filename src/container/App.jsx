import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar/NavBar";
import Title from "../components/Header/Title";
import "../style/App.css";

import ItemDetailContainer from "../components/ItemDatailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />

        <Title title="JMComputacion" />

        <Switch>
          <Route exact path="/">

            <ItemListContainer />
          </Route>

          <Route exact path="/category/:idCategory">

            <ItemListContainer />
          </Route>

          <Route exact path="/item/:idF">

            <ItemDetailContainer />

          </Route>

          <Route exact path="/cart">
              <Cart/>
          </Route>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
