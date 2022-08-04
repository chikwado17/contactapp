import React, { useState } from 'react';
import firebase from '../firebase';
import { isEmpty } from 'lodash';

const AddEdit = () => {

    const initialValues = {
        name: '',
        mobile: '',
        email: '',
        address: ''
    }

    const [contacts, setContacts] = useState(initialValues);

    const { name, mobile, email, address } = contacts;


    //function to handle input change
    const handleInputChange = (e) => {
        console.log('jdjdj')
    }


    //function to submit form data
    const handleSubmit = () => {

    }

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" className='form-control' value={name} name='name' onChange={handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label>Mobile</label>
                        <input type="phone" className='form-control' value={mobile} name='mobile' onChange={handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" className='form-control' value={email} name='email' onChange={handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <input type="text" className='form-control' value={address} name='address' onChange={handleInputChange} />
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-outline-secondary'>Cancel</button>
                        <button type='submit' className='btn btn-success ms-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddEdit;