import React from "react";
import './Aboutus.css'
import About from './images/About-Innostes-home.svg'
import { yy1 } from "./data/data";

const Aboutus = () => {
    

    return (
        <div>
            <div className="bgImg">
                <div className="container">

                    <div className="row text-center">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <h1>About Us</h1>
                            <p>Innostes Solutions Pvt Ltd / About Us</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container ">
                <div className="row align-items-center mt-3">
                    <div className="col-lg-6 col-sm-6 col-md-6 text-right">
                        <p>About Us</p>
                        <h1>We Are Spreading Our Wings Success As Our Theme</h1>
                        <p>At Innostes Solutions, we believe in the transformative power of technology. We are a passionate team of innovators, developers, and creatives dedicated to crafting exceptional web and mobile app solutions that propel businesses into the digital future since 6+ years.</p>
                        <p>WE at Innostes treat Client as deity. Our team solace you with their sophisticated and impregnable code by using forefront technologies that make you contented. We are exuberant and multi-talented who can persuade with our out-turn.</p>
                        <h4>Our Journey</h4>
                        <p>Founded in 2017, our journey began with a simple yet powerful vision: to empower businesses through cutting-edge technology. What started as a small team with big dreams has evolved into a thriving company with a reputation for delivering top-notch web and mobile solutions.</p>
                        <h4>Our Mission and Values</h4>
                        <p>Our mission is clear - Understand an problem in business and to deliver tailor-made digital solutions that not only meet but exceed the expectations of our clients. At the core of our approach are our values: integrity, innovation, collaboration, and client satisfaction. These principles guide every aspect of our work and define who we are as a company.</p>
                        <h4>Ready to transform your digital presence? Get in touch with us, and let's embark on a journey to success together.</h4>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 text-center ">
                        <img src={About} width={"50%"} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 text-center mt-5 mb-5">
                        <button style={{ width: "15%", padding: "5px", borderRadius: "15px", backgroundColor: "aqua", fontWeight: "bold", color: "white", border: "none" }}>Services</button>
                        <h1>About Our Featured Services</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {yy1.map((e) => {
                        return (
                            <div className="col-lg-4 col-sm-4 col-md-4">
                                <div className="card mt-2 p-3 mb-3 text">
                                    <div className="cardbody">
                                        <h4 className="cardtitle">{e.title}</h4>
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
export default Aboutus
