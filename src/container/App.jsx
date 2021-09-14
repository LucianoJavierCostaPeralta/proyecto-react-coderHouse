import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar/NavBar';
import Title from'../components/Header/Title';
import '../style/App.css';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDatail/ItemDetailContainer';

function App() {
  return (
    
    <div className="App">

      <NavBar/>

      <Title title='JMComputacion'/>

      <ItemListContainer />

      <ItemDetailContainer />

    </div>
  );
}

export default App;
