import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="glass-card">
          {/* Top Navigation */}
          <nav className="nav-bar">
            <Link to="/" className="nav-link">🏠 Home</Link>
            <Link to="/users" className="nav-link">👥 Users</Link>
            <Link to="/create-user" className="nav-link">➕ Add New</Link>
          </nav>

          <Routes>
            <Route path="/" element={
              <div className="home-content">
                <h1 style={{ color: '#2d3748', fontSize: '2.5rem' }}>Hotel Review System</h1>
                <p style={{ color: '#718096', marginBottom: '30px' }}>Welcome to Hotel Mgt Dashboard</p>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                  <Link to="/users" className="btn btn-primary">Manage Users</Link>
                  <Link to="/create-user" className="btn btn-success">Create New User</Link>
                </div>
              </div>
            } />
            <Route path="/users" element={<UserList />} />
            <Route path="/create-user" element={<CreateUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;