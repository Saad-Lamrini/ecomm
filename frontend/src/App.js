import data from './data';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homescreen from './Screens/Homescreen';
import Productscreen from './Screens/Productscreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Boutique Lamrini</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Productscreen />} />
            <Route path="/" element={<Homescreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
