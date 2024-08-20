import './App.scss';
import {Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Learn from './components/Learn';
import Explore from './components/Explore';
import Swiper from './components/swiper';
import CreatAcc from './components/CreateAcc';
import SearchAddress from './components/searchAddress';
function App() {
  const handleExploreSubmit = (inputValue) => {
    console.log('Submitted address:', inputValue);
    // Add your submission logic here
  };
  return (
    
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/learn" element={<Learn/>} />
          <Route path="/explore" element={<Explore onSubmit={handleExploreSubmit}/>} />
          <Route path="/search-address" element={<SearchAddress/>} />
          <Route path="/create-account" element={<CreatAcc/>} />
          {/* Add more routes as needed */}
        </Routes>
      </>
    
  );
}

export default App;
