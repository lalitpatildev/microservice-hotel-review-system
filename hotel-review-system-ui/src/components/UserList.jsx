import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    const loadUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  const capitalizeName = (name) => {
    return name ? name.split(' ')
                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                 .join(' ') : "";
  };

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(users.length / recordsPerPage);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>👥 User Directory</h2>

      <div className="custom-scrollbar" style={{ maxHeight: '350px', overflowY: 'auto', marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
            <tr style={{ borderBottom: '2px solid #eee' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>#</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((user, index) => (
              <tr key={user.userId} style={{ borderBottom: '1px solid #f9f9f9' }}>
                <td style={{ padding: '12px', textAlign: 'left', color: '#888' }}>
                  {indexOfFirstRecord + index + 1}
                </td>
                <td style={{ padding: '12px', textAlign: 'left', fontWeight: '500' }}>
                  {capitalizeName(user.name)}
                </td>
                <td style={{ padding: '12px', textAlign: 'left', color: '#666' }}>
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginTop: 'auto' }}>
        <button
          className="btn-pagination"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Previous
        </button>

        <span style={{ fontWeight: 'bold', color: '#4a5568' }}>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          className="btn-pagination"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;