import React from 'react';
import { Link } from 'react-router-dom';

const ContactListsItem = ({contacts, handleonDelete}) => {

  
  
  return (
    <div className='container-fluid mt-3'>
        <div className='row'>
            <div className='col-lg-12'>
            <div className="table-responsive">
                <table className='table align-middle'>
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
                              <Link to={`/update/${contacts[id].id}`}>
                                <span className='btn text-primary'>
                                  <i className='fa fa-pencil-alt'></i>
                                </span>
                              </Link>

                                <span onClick={() => handleonDelete(contacts[id].id)} className='btn text-danger'>
                                  <i className="fa-solid fa-trash-can"></i>
                                </span>

                              <Link to={`/view/${contacts[id].id}`}>
                                <span className='btn text-info'>
                                <i className="fa-solid fa-eye"></i></span>
                              </Link>
                            </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ContactListsItem