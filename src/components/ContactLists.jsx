import React, { useEffect, useState } from 'react';
import { db }from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ContactListsItem  from './ContactListsItem';


const ContactLists = () => {

    const [contacts, setContacts] = useState({});
    const [isloading, setIsloading] = useState(true);

    const getContacts = async () => {
        try {
            const docRef = collection(db, "contacts");
            const docSnap = await getDocs(docRef);
    

            let contacts = [];
            docSnap.docs.forEach((doc) => {
              return contacts.push({
                id: doc.id,
                ...doc.data()
              })
            });

            setContacts(contacts);
    
          }catch(err) {
            console.log(err);
          }
    }

    useEffect(()  => {
        getContacts();
        setIsloading(false)
         //eslint-disable-next-line
    }, []);


    if(isloading) {
      return <h1>Loading</h1> 
    }else {
      return (
        <div>

          <ContactListsItem contacts={contacts}  />
        </div>
      )
    } 
}

export default ContactLists;