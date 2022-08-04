import React from 'react';

const ContactListsItem = ({contacts}) => {

  console.log(contacts);
  return (
    <div className='container-fluid mt-3'>
        <div className='row'>
            <div className='col-lg-12'>
                <table className='table table-bordered table-striped'>
                  <thead>
                     <tr>
                        <th scope='col'>No.</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Mobile</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Action</th>
                     </tr>
                  </thead>

                  <tbody> 
                    {Object.keys(contacts).map((id,index) => {
                      return (
                        <tr key={id}> 
                            <th scope='row'>{index+1}</th>
                            <td>{contacts[id].name}</td>
                            <td>{contacts[id].mobile}</td>
                            <td>{contacts[id].email}</td>
                            <td>{contacts[id].address}</td>
                            <td>
                              delete
                            </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
            </div>  
        </div>
    </div>
  )
}

export default ContactListsItem