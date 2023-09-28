import './App.css';
import { Route, Routes} from 'react-router-dom';
import ExoContainer from './Components/ExoContainer/ExoContainer.js';


import { useEffect} from "react";
import { useDispatch} from 'react-redux'
import { getNumbers } from '../src/redux/actions';


function App() {
  

  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(getNumbers())},
     [dispatch]
  );
  
  return (
    <div className='App' >    
      <Routes>
        <Route path="/" element={<ExoContainer />} />
        <Route path="*" element={<ExoContainer />} />
      </Routes>
    </div>

  );
}

export default App;
