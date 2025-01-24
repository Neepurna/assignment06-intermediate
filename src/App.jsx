import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

function NavBar() {
  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>React Router</h1>
    </div>
  );
}

function Dashboard({ onLogout }) {
  return (
    <div style={containerStyle}>
      <h2>Dashboard</h2>
      <button 
        onClick={onLogout}
        style={buttonStyle}
      >
        Logout
      </button>
    </div>
  );
}


function Login({ onLogin }) {
  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <button 
        onClick={onLogin}
        style={buttonStyle}
      >
        Login
      </button>
    </div>
  );
}



function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/dashboard"
          element={loggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route 
          path="/login" 
          element={loggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  );
}

const headerStyle = {
  borderBottom: '1px solid #eaeaea',
  padding: '20px 0',
  marginBottom: '40px'
};

const titleStyle = {
  textAlign: 'center',
  color: '#333',
  fontSize: '2rem',
  fontWeight: '500',
  marginBottom: '1rem'
};

const buttonStyle = {
  padding: '8px 24px',
  border: '2px solid #007bff',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px'
};

const containerStyle = {
  padding: '40px 20px',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center'
};

export default App;