import React from 'react';
import { Route, Link, BrowserRouter as Router , Routes} from 'react-router-dom';
import CaseComponent from 'components/case/CaseComponent';
import Dashboard from 'components/case/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>

        <Route path="/"  element={<Dashboard />} />
        <Route path="/case" element={<CaseComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
