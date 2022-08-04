import React from 'react'
import ContactLists from './ContactLists'

const Dashboard = () => {
  return (
    <div className='container-fluid mt-2'>
        <div className='row'>
            <div className='col-lg-12'>
              <div className="p-5 mb-4 bg-light rounded-3">
                  <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Contact Management System</h1>
                  </div>
              </div>
            </div>
        </div>
        <ContactLists />
    </div>
  )
}

export default Dashboard