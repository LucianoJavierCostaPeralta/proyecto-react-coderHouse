


import 'bootstrap/dist/css/bootstrap.min.css';



import NavBar from '../components/NavBar/NavBar';
import Title from'../components/Header/Title';
import '../style/App.css';
import ItemListContainer from '../components/ItemListContainer';

function App() {
  return (
    
    <div className="App">

      <NavBar/>
      <Title title='JM Computacion'/>

      <ItemListContainer />

    </div>    
    
    
  );
}

export default App;
