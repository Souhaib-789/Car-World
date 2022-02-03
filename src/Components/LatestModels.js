import React from "react";
import "./Screens/Home.css";


export default function LatestModels() {
    return (
        <div className='div2'>
            <h3 className="display-5 subheading"> Latest Models</h3>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col" data-aos="zoom-in-right">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJPh3Z54og61ZXl2XZGddGDwZhkrpEOtA94lXmVC6hDQGShuUCs5UDamXygvgREGaIUk&usqp=CAU" className="card-img-top crimg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Corolla Altis</h5>
                            <p className="card-text">Toyota Corolla Altis Price: Toyota retailed the Corolla Altis from Rs 14.83 lakh to Rs 20.19 lakh </p>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-right">
                    <div className="card">
                        <img src="https://fairwheels.com/wp-content/uploads/2019/03/Honda-Civic-2019-Feature-Image.jpg" className="card-img-top crimg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Civic</h5>
                            <p className="card-text">The Honda Civic is a series of automobiles manufactured by Honda since 1972. Since 2000, the Civic has been categorized as a compact car,</p>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-left">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6INDHDS5PimDfBsFBnMd2cFcBzs5xoJQ4Q&usqp=CAU" className="card-img-top crimg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Passo</h5>
                            <p className="card-text">There are 723 used Toyota Passo Cars for sale in Pakistan starting at PKR 2650. </p>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in-left">
                    <div className="card">
                        <img src="https://global.toyota/pages/news/images/2017/01/12/1330/20170112_01_ogp.jpg" className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vitz</h5>
                            <p className="card-text">The Toyota Vitz is a three- and five-door subcompact hatchback produced by the Japanese automobile manufacturer Toyota from 1999 to 2019. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}