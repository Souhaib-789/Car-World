import React, {useState, useContext} from 'react';
import '../Components.css';
import { useHistory } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, db, setDoc, doc, collection, addDoc } from "./Firebase";




export default function Register() {
    const history = useHistory();

    const Go = () => {
        history.push('/login')
    }


    const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

    const Register = async () => {
        try {
          let { user } = await createUserWithEmailAndPassword(auth, email, password)
          var obj = {
            email,
            password,
            uid: user.uid,
          }
          console.log(obj)
          let studentRef = doc(db, 'Users', user.uid);
          await setDoc(studentRef, obj)
          alert('Signup successfully !')
        }
        catch (error) {
    
          const errorMessage = error.message;
          console.log(errorMessage);
    
        };
      }
    return (
        <div>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://api.hatchwise.com/api/public/storage/assets/contests/entries/L975725-20170505223029.jpg" alt="" />
                        <h3>Car World</h3>
                        <p>Car World providing the best cars in best prices , come in and value your choice.</p>
                        <button onClick={Go} type="submit" className="login btn btn-danger" > Login</button> <br />
                    </div>
                    <div className="col-md-9 register-right">

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Sign Up</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group ">
                                            <i className="fa fa-envelope ddd"> </i> <label className='ddd'>Email</label>
                                            <input onChange={(e) => { setemail(e.target.value) }} type="text" className="form-control" placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group">
                                            <i className="fa fa-lock ddd"> </i> <label className='ddd'>Password</label>
                                            <input onChange={(e) => { setpassword(e.target.value) }} type="password" className="form-control" placeholder="Enter Password" />
                                        </div>
                                        <button onClick={Register} type="submit" className="btnRegister btn btn-primary" > Register</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}