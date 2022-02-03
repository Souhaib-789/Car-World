import React, { useState } from 'react';
import { Cars } from './Cars';
import './Shopping.css';
import { db, getDocs, query, collection, addDoc } from "../Components/Login/Firebase";
import { storage } from "../Components/Login/Firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";

export default function Shopping() {

	//Adding data to cart
	const addToCart = async (img, name, price) => {
		console.log(img, name, price)
		const sendimage = ref(storage, "image/" + img.name);
		const uploadtask = await uploadBytesResumable(sendimage, img)
		await getDownloadURL(ref(storage, sendimage)).then((url) => {
			var imgurl = url;
			let CartItem = { name, price, image: imgurl }
			console.log(CartItem)
			let CartItemRef = collection(db, 'CartItem');
			addDoc(CartItemRef, CartItem);
			alert(name + " " + "added to Cart")
			console.log(url)
		})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			})

		alert(name + " " + "added to Cart")
	}



	return (


		<div className='maindiv'>



			<div className="container-xl subdiv">
				<div className="row">
					<div className="col-md-12">
						<h2 className='featuredcars'>Featured <b>Cars</b></h2>
						<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
							<div className="carousel-inner">
								<div className="item carousel-item active">
									<div className="row">

										{Cars.map(({ img, name, price }, index) => {
											return (

												<div key={index} className="col-sm-3 dsfg">
													<div className="thumb-wrapper">
														<span className="wish-icon"><i className="fa fa-heart-o"></i></span>
														<div className="img-box">
															<img src={img} className="img-fluid" alt="" />
														</div>
														<div className="thumb-content">
															<h4>{name}</h4>
															<div className="star-rating">
																<ul className="list-inline">
																	<li className="list-inline-item"><i className="fa fa-star"></i></li>
																	<li className="list-inline-item"><i className="fa fa-star"></i></li>
																	<li className="list-inline-item"><i className="fa fa-star"></i></li>
																	<li className="list-inline-item"><i className="fa fa-star"></i></li>
																	<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
																</ul>
															</div>
															<p className="item-price"><b>PKR {price}</b></p>
															<button onClick={() => { addToCart(img, name, price) }} className="btn cv btn-primary">Add to Cart</button>
														</div>
													</div>
												</div>
											);
										})}




									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>



	)
}