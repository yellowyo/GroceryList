import './App.css';
import shopping from './shopping.jpeg';
import man from './man.jpeg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='list'><img src={shopping} width='250px' alt='pic'/></div>
      <div className='list'><h1>Grocery List</h1></div>
      <GroceryList />
      <div className='list'><img src={man} width='250px' alt='man'/></div>
    </div>
  );
}

export default App;
