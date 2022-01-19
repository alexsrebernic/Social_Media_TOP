import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({children}:{children:any}) => {
  return (
      <div>
          <Header/>
          <div className='w-full  flex container-content'>
              <Sidebar/>
              <div className='w-full content '> 
                  {children}
              </div>
          </div>
      </div>
  );
};
export default Layout