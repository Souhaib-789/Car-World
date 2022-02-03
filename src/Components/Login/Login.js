import React,{useState, useContext} from 'react';
import '../Components.css';
import { useHistory } from "react-router-dom";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
    const history = useHistory();



    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const Login = () => {
        const auth = getAuth();
    
        signInWithEmailAndPassword(auth, email, password)
          .then((email, password) => {
            console.log(email, password);
            alert(' Logged In succesfully !')
            history.push('/home')
    
    
          })
          .catch((error) => {
    
            const errorMessage = error.message;
            console.log(errorMessage);
    
          });
      }
    

    return (
        <div>
            <div className="container register fd" >
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://api.hatchwise.com/api/public/storage/assets/contests/entries/L975725-20170505223029.jpg" alt="" />
                        <h3>Car World</h3>
                        <p>Car World providing the best cars in best prices , come in and value your choice.</p>
                        <br />
                    </div>
                    <div className="col-md-9 register-right">

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Sign In</h3>
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
                                        <button onClick={Login} type="submit" className="btnRegister btn btn-primary" > Login</button>
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