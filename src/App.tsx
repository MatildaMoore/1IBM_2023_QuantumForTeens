import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, QuantumComputer } from 'components';


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quantum-computer" element={<QuantumComputer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;