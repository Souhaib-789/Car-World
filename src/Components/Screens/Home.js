import React from 'react';
import Head from '../Head';
import LatestModels from '../LatestModels';
import Shopping from '../Shopping';
import Footer from '../Footer';
import "./Home.css";
import "../Shopping.css";





export default function Home() {

    return (
        <>

            <Head />

            <LatestModels />

            <Shopping />

            <Footer />

        </>
    );
}