import React from 'react';

export default function History() {
  return (
    <div className="container">
      <h1>History</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>John Doe</td><td>Math</td><td>03-09-2025</td></tr>
          <tr><td>John Doe</td><td>OS</td><td>03-09-2025</td></tr>
          <tr><td>John Doe</td><td>Physics</td><td>03-09-2025</td></tr>
          <tr><td>John Doe</td><td>Chemistry</td><td>03-09-2025</td></tr>
        </tbody>
      </table>
    </div>
  );
}