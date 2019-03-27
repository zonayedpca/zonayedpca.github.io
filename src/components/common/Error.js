import React from 'react';

const Error = ({ children }) => (
  <div className="error-area">
    <div className="error">
      <p className="code">404</p>
      {children}
    </div>
  </div>
)

export { Error };
