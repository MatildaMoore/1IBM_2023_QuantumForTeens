import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, QuantumComputer, QSphere } from 'components';
import styles from './App.module.scss';


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quantum-computer" element={<QuantumComputer />} />
                    <Route path="/q-sphere" element={<QSphere />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;