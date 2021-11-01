import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { toast } from 'react-toastify';

function AddContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");


    const contacts = useSelector((state) => state);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact=> contact.email === email && contact);
        const checkNumber = contacts.find(contact=> contact.number === parseInt(number));


        if(!email || !number || !name){
            return toast.warning("Please fill in all fields!")
        }

        if(checkEmail){
            return toast.warning("This email already Exists!");
        }
        if(checkNumber){
            return toast.warning("This Number already Exists!");
        }
    }
    return (
        <div className="container">
            <h1 className="display-3 text-center">Add Student</h1>
                <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" >
                            <input type="text" placeholder="Name" 
                            className="form-control"
                            value={name} onChange={e=> setName(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder="Email" 
                            className="form-control"
                            value={email} onChange={e=> setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="number" placeholder="Phone number" 
                            className="form-control"
                            value={number} onChange={e=> setNumber(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="submit" 
                            placeholder="Add Student" 
                            className="btn btn-block btn-dark"/>
                        </div>
                        
                    </form>

                </div>

            </div>
            
        </div>
    )
}

export default AddContact
