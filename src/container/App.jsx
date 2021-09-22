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

          <Route component={ItemListContainer} exact path="/"/>

          <Route component={ItemListContainer} exact path="/category/:idCategory"/>

          <Route component={ItemDetailContainer} exact path="/item/:idF"/>

          <Route component={Cart} exact path="/cart" />

        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
