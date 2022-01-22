import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({children,user}) => {
  return (
      <div>
          <Header user={user}/>
          <div className='w-full  flex container-content'>
              <Sidebar user={user}/>
              <div className='w-full content '> 
                  {children}
              </div>
          </div>
      </div>
  );
};
export default Layout