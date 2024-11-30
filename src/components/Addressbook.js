import React, { useEffect, useState } from "react";
import axios from "axios";

import './Addressbook.css';

function Addressbook() {
    const [contacts,setContacts]=useState([]);
    const[cn,setContactName]=useState('');
    const[em,setEmail]=useState('');
    const[cnum,setContactNunber]=useState('');
    const[a,setAddress]=useState('');
    useEffect(() => {
        fetchContacts();
    }, []);

    function fetchContacts(){
        axios.get("http://localhost:8080/api/contacts")
        .then((res)=>{
            setContacts(res.data);
        });
    }
    function addContact(){
        const contactDetails={
            contactName: cn,
            email: em,
            contactNumber: cnum,
            address:a
        };
        axios.post("http://localhost:8080/api/contacts",contactDetails)
             .then((res)=>{
                setContactName("");
                setEmail("");
                setContactNunber("");
                setAddress("");
             }) ;
    }
    
  return (
    <div className='addressbook'>
        <div className="header">
        <h1>My Contacts</h1>
        
        
        </div>
        <div className="input-group">
        <input
          type="text"
          placeholder="Name"
          value={cn}
          onChange={(e) => setContactName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={em}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Number"
          value={cnum}
          onChange={(e) => setContactNunber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter password"
          value={a}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="add" onClick={addContact}>Add</button>
      </div>
      <h1>Contact List</h1>
      
        <div className='contact_list'> 
            {contacts.lenght === 0 ? 
                (<p>no contact found</p>)
                :(contacts.map((contact)=>(
                    <div className='contact_instance' key={contact.id}>
                         <div className="contact-avatar">
                            {contact.contactName.charAt(0).toUpperCase()}
                        </div>
                        
                        <div className="data">
                            <p>{contact.contactName}</p>
                            <p><strong>{contact.email}</strong></p>
                            <p><strong>{contact.contactNumber}</strong></p>
                            <p>{contact.address}</p>
                        </div>
                       
                    </div>
                ))
                )}
                
        </div>
        
    </div>
  )
}

export default Addressbook;