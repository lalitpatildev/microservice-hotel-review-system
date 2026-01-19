import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [user, setUser] = useState({ name: '', email: '', about: '' });
    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    // email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        alert("Please enter correct Email-ID (ex. abc@xyz.com)");
        return;
    }

    // when enter email is correct then call
    try {
        await axios.post('http://localhost:8080/users', user);
        alert("User Created Successfully!");
        navigate('/users');
    } catch (error) {
        alert("बॅकेंड एरर: " + error.message);
    }
};

   return (
       <div className="form-container-wrapper">
           <h2 style={{ textAlign: 'center', color: '#2d3748', marginBottom: '25px' }}>
               New User Registration
           </h2>
           <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
               <div>
                   <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4a5568' }}>Full Name</label>
                   <input
                       style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }}
                       type="text" placeholder="FirstName LastName" required
                       onChange={(e) => setUser({...user, name: e.target.value})}
                   />
               </div>
               <div>
                   <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4a5568' }}>Email Address</label>
                   <input
                       style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }}
                       type="email" placeholder="user@example.com" required
                       onChange={(e) => setUser({...user, email: e.target.value})}
                   />
               </div>

               <button type="submit" className="btn btn-primary">
                   Register User
               </button>
           </form>
       </div>
   );
};

export default CreateUser;