// import App2 from './App2'
// import './App.css';

// function App() {
//   return (
//     <div>
//       <App2/>
//     </div>
//   );
// }

// export default App;






















import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Port from './App2.js'
import Resume from './Resume.js';
import Hire from './Hire.js';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Port />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/hire' element={<Hire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;