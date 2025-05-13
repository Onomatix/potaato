import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import Onboarding from './components/Onboarding';

function App() {
  const hasCompletedOnboarding = localStorage.getItem('onboardingComplete') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            hasCompletedOnboarding ? 
              <Navigate to="/app" replace /> : 
              <Onboarding />
          } 
        />
        <Route path="/app" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
