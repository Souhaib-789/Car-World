import React, { useState, useEffect } from "react";
import './cart.css';
import { db, getDocs, query, collection, addDoc } from "../Login/Firebase";



export default function Cart() {

    let price =0;
    const [count,setcount] = useState(0) 


    //Calling data from firestore
    const [CartItem, setCartItem] = useState([]);
    const CartCollection = collection(db, 'CartItem');
    useEffect(() => {
        const getData = async () => {
            const dish = await getDocs(CartCollection);
            setCartItem(dish.docs.map((doc) => ({ ...doc.data(), id: doc.id })));


        }
        getData();
    }, []);


    return (

        <div>
            <div className="card cartt">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4><b>Shopping Cart</b></h4>
                                </div>
                                { count > 1 || count == 1 ? <div className="col align-self-center text-right text-muted">  {count} items</div>
                                :
                                    <div className="col align-self-center text-right text-muted">  Cart is empty</div>
                                }
                                
                            </div>
                        </div>

                        {CartItem.map(({ image, name, price }, index) => {
                            return (
                                <div key={index} className="row border-top border-bottom">
                                    <div className="row main align-items-center">
                                        <div className="col-2"><img className="img-fluid" src={image} /></div>
                                        <div className="col">
                                            <div className="row">{name}</div>
                                        </div>
                                        <div className="col"> <i className="fa fa-minus" onClick={() => { setcount(count - 1) }}> </i>
                                        <input className="qinp" type='text' placeholder={count} />
                                        <i className="fa fa-plus" onClick={()=>{ setcount(count + 1) }}> </i> </div>
                                        <div className="col">PKR{price}<span className="close">&#10005;</span></div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5><b>Summary</b></h5>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: "1" }}>ITEMS {count}</div>
                            <div className="col text-right">PKR {price * count}</div>
                        </div>
                        <form>
                            <p>SHIPPING</p> <select>
                                <option className="text-muted">Standard-Delivery- 5000 PKR</option>
                            </select>
                            <p className="mt-4">Your Address</p> <input id="code" placeholder="Enter your address" />
                        </form>
                        <div className="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">PKR {price * count}</div>
                        </div> <button className="btn vs ">Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}