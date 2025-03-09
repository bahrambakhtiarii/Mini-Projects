import './App.css';
import {useState} from 'react'
import Content from './Content';
import GetColor from './GetColor'

function App() {
  const [ginput , setGinput] = useState('');
  const checkValidation = (e) => {
    const nameOfColor = e.trim().split('');
    const noSpaces = nameOfColor.filter(char => char !== ' ').join('');
    setGinput(noSpaces);
};

  
  return (
    <>
      <Content 
        ginput={ginput}
      />
      <GetColor 
        ginput = {ginput}
        checkValidation = {checkValidation}
      />

    </>
    
    
  );
}

export default App;
