import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="view-pending-container10">
      <div className="view-pending-view-pending">
        <Sidebar />
        <div className="view-pending-frame1618868177">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;