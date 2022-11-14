import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';
import Health from './routes/health';


const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, [])
    return (
        <>
            <Router>

                {!isLoading && <><Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/api/health' element={<Health />} />
                    <Route path='/' element={<Navigate to="/home" />} />
                </Routes></>}


            </Router >
        </>
    )
}
export default App;