import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import ContactListsItem  from './ContactListsItem';


const ContactLists = () => {

    const [contacts, setContacts] = useState({});
    const [isloading, setIsloading] = useState(true);

      useEffect(()  => {
        getContacts();
        setIsloading(false)
        //eslint-disable-next-line
      }, []);


    //function to get data from firebase firestore to App UI
    const getContacts = async () => {
        const docRef = collection(db, "contacts");

        try {
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

    //function to delete data from firestore firebase
    const handleonDelete = async (id) => {
      const taskDocRef = doc(db, 'contacts', id);
      try{

        //delete from firestore
        await deleteDoc(taskDocRef);

        //delete from firebase
        setContacts(contacts.filter(item => item.id !== id));

      } catch (err) {
        console.log(err)
      }
    }


    if(isloading) {
      return <h1>Loading</h1> 
    }else {
      return (
        <>
          <ContactListsItem contacts={contacts} handleonDelete={handleonDelete} />
        </>
      )
    } 
}

export default ContactLists;