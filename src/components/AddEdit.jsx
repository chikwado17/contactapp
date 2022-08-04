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
    const handleChangeInputs = (e) => {
       let { name, value } = e.target;
        setContacts({
            ...contacts,
            [name]: value
        })
    }


    //function to submit form data
    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            name,
            mobile,
            email,
            address
        }

        console.log(newData);
    }

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className="form-label">Name</label>
                        <input type="text" className='form-control' value={name} name="name" onChange={handleChangeInputs} />
                    </div>
                    <div className='form-group'>
                        <label className="form-label">Mobile</label>
                        <input type="phone" className='form-control' value={mobile} name="mobile" onChange={handleChangeInputs} />
                    </div>
                    <div className='form-group'>
                        <label className="form-label">Email</label>
                        <input type="email" className='form-control' value={email} name="email" onChange={handleChangeInputs} />
                    </div>
                    <div className='form-group'>
                        <label className="form-label">Address</label>
                        <input type="text" className='form-control' value={address} name="address" onChange={handleChangeInputs} />
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