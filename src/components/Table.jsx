import React from 'react';

function Table({ headers, data }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.farmer}</td>
            <td>{order.landSize}</td>
            <td>{order.fertilizer}</td>
            <td>{order.seeds}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
