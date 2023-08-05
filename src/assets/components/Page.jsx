import React from 'react'
import "../../assets/css/main.css"
import Header from './Header'
import Banner from './Banner'
import Link from './Link'
import Footer from './Footer'
import {  BrowserRouter as Router, Route } from "react-router-dom";

const Page = () => {



    return (
        <>
            <div>
                <div id="page-wrapper">
                 {/*   <Router> */}
                  {/*  <Route exact path="/" component={Header} /> */}
                   <Header/>
                    <Banner />
                    <Link />
                    <Footer />

                 {/*   </Router> */}
                   
                  
                </div>
            </div>

        </>

    )
}





export default Page