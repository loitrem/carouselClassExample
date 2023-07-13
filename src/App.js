import logo from './logo.svg';
import './App.css';

//------------------------------------- 1. import the hook
//hooks import
import { useState } from 'react';

//------------------------------------- 2. import data and components
import cardImages from './modules/cardImages'
import symbols from './modules/symbols'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  //------------------------------------- 3. destructure our state - first variable is anything - second is always setYourVariable = useState(Starting Value)
  const [count, setCount] = useState(0);

  //------------------------------------- 4. create functions that can be used as props that will useState hooka nd chage data in state
  //------------------------------------- Functions above return statement
  const addCount = () => {
    setCount(count + 1);
  }

  const subCount = () => {
    setCount(count - 1);
  }

  //------------------------------------- 5. return statement
  return (
    <div className="App">
      <Card/>
      <Button className='leftButton' changePic={subCount} symbols={symbols.left}/>
      <Button className='rightButton' changePic={addCount} symbols={symbols.right}/>
    </div>
  );
}

export default App;
