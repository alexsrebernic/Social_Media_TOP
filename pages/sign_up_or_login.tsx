import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Tabs,Tab,TabContainer } from 'react-bootstrap';
import Register from '../components/Register';
import Login from '../components/Login';
import EnterAsATestUser from '../components/EnterAsATestUser'
export const SignUpOrLogin = () => {
  return (
  <div className='background-log-in-register flex flex-col justify-center items-center'>
      <div className=' flex flex-col justify-start items-center bg-white container-log-in-register'>
          <Icon icon="brandico:facebook-rect" width="50px" className='mt-5' color="#3a3b6a" />
        <div className='flex flex-col justify-center items-start px-5 my-6 w-full container-form'>
            <Tabs  id="uncontrolled-tab-example" className="mb-3 flex ">
              <Tab eventKey="Register" title="Register" >
                <Register/>
              </Tab>
              <Tab eventKey="Log in" title="Log In">
                <Login/>
              </Tab>
              <Tab eventKey="Enter as a user" title="Enter as a Test user">
                <EnterAsATestUser/>
              </Tab>
            </Tabs>
           
          </div>
            <div>
            </div>
      </div>
  </div>
  )
};
export default SignUpOrLogin