import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router';


const ViewContact = () => {

    const [data, setData] = useState({});

    let paramId = useParams();
    const { id } = paramId;


    useEffect(() => {
  
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
      
       
        // eslint-disable-next-line
    },[id]);

 const {name, mobile, email, address} = data;

  return (
    <div className='container-fluid mt-2'>
        <div className='row'>
            <div className='col-lg-12'>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-center">User Contact Details</h1>
                </div>

                <div className='text-center'>
                    <h3>{name}</h3>
                    <h3>{mobile}</h3>
                    <h3>{email}</h3>
                    <p>{address}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ViewContact;