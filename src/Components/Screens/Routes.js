import React, {useEffect, useContext} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "../Footer";
import Register from "../Login/Register";
import Login from "../Login/Login";
import Shopping from "../Shopping";
import Cart from "./Cart";
import { auth, onAuthStateChanged, db, doc, getDoc } from '../Login/Firebase';
import { GlobalContext } from "../Context/Context";





export default function Routes() {


    const { state, dispatch } = useContext(GlobalContext);

    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserInfo(user.uid);
                // console.log(user.uid)
            }
            else {
                console.log('user not found');
            }
        })
    }, []);

    const fetchUserInfo = async (uid) => {
        let userRef = doc(db, 'Users', uid);
        let userInfo = await getDoc(userRef);
        userInfo = userInfo.data();
        console.log(userInfo);
        dispatch({ type: "AUTH_USER", payload: userInfo });
        console.log(state.authUser)
    }

    return (
        <Router>
            <Navbar />
            <Switch>
            {/* {
                        state.authUser ?
                             
                              <>  */}
                 <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                               {/* </>: null
} */}



                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            
                <Route path="/shopping">
                    <Shopping />
                </Route>
            </Switch>
        </Router>
    );
}