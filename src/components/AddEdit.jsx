import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router';  
import { isEmpty } from 'lodash';

const AddEdit = () => {

    const initialValues = {
        name: '',
        mobile: '',
        email: '',
        address: ''
    }

    const [data, setData] = useState({});
    const [contacts, setContacts] = useState(initialValues);
    
    const navigate = useNavigate();
    let paramsId = useParams();
    const { id } = paramsId;


    //function to handle input change
    const handleChangeInputs = (e) => {
    let { name, value } = e.target;
        setContacts({
            ...contacts,
            [name]: value
        });
    }


    useEffect(() => {
        if(!isEmpty(id)) {
            const getSingleContact = async () => {
                const docRef = doc(db, "contacts", id);
                try {
                    const docSnap = await getDoc(docRef);
                    
                    if (docSnap.exists()) {
                        setData({
                            id:docSnap.id,
                            ...docSnap.data()
                        });
                        } else {
                        console.log("No such document!");
                        }
                }catch (e) {
                    console.log(e);
                    }
                
            }
            getSingleContact();
        }
       
        // eslint-disable-next-line
    },[id]);



    useEffect(() => {
        if(isEmpty(id)) {
            setContacts({...initialValues})
        }else {
            setContacts({...data})
        }

       
    // eslint-disable-next-line
    }, [id, data]);



    //function to submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(isEmpty(id)) {
            await addDoc(collection(db, "contacts"), {
                name,
                mobile,
                email,
                address
            });
            navigate('/');
             
        }else {
            const taskDocRef = doc(db, 'contacts', id);

            await updateDoc(taskDocRef, {
                ...contacts
            });

            navigate('/');

        }
    }




    //spreading the state values
    const { name, mobile, email, address } = contacts;

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
                            <button type='button' onClick={() => navigate('/')} className='btn btn-outline-secondary'>Cancel</button>
                            <button type='submit' className='btn btn-success ms-2'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEdit;