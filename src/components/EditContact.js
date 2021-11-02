import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link, useParams } from "react-router-dom"
import { toast } from 'react-toastify';


function EditContact() {
    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ number, setNumber] = useState("");
    const { id } = useParams();

    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact=> contact.id === parseInt(id));

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        if(currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number)
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact=> contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find(contact=> contact.id !== parseInt(id) && contact.number === parseInt(number));


        if(!email || !number || !name){
            return toast.warning("Please fill in all fields!")
        }

        if(checkEmail){
            return toast.warning("This email already Exists!");
        }
        if(checkNumber){
            return toast.warning("This Number already Exists!");
        }
        const data = {
            id: parseInt(id),
            name,
            email,
            number,
        };

        dispatch({type: "UPDATE_CONTACT", payload:data});
        toast.success("Student Updated successfully!!!");
        history.push("/")
    };

    return (
        <div className="container">
            {currentContact? (

            
            <>
            <h1 className="display-3 my-5 text-center">
                    Edit Student {id}
                </h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            placeholder="Name" 
                            className="form-control"
                            value={name} 
                            onChange={e=> setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder="Email" 
                            className="form-control"
                            value={email} 
                            onChange={e=> setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input type="number" placeholder="Phone number" 
                            className="form-control"
                            value={number} 
                            onChange={e=> setNumber(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                            type="submit" 
                            placeholder="Update Student" 
                            className="btn btn-dark"
                            />
                            <Link to="/" className="btn btn-danger ml-3">
                                Cancel
                            </Link>
                        </div>
          
                    </form>

                </div>

            </div>
            </>
            ): (
                <h1 className="display-3 my-5 text-center">
                    Student contact with id {id} doesn't exist
                </h1>
            )}
        </div>
    )
}

export default EditContact

