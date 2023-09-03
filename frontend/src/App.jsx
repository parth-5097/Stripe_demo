import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import PaymentPage from './components/PaymentPage'

const App = () => (
	<Router>
    <Routes>
      <Route path='/' element={<PaymentPage />} />
    </Routes>
	</Router>
);

export default App
