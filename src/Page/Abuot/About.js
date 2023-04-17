import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import './About.css'
export default function About() {
    return (
        <>
            <Header />
            <div className="Rozome__head">
                <div className="about">
                    <h3>About</h3>
                    <p>I am a civil Engineer masterd in traffic design and transportaion. I have worked in my field for 2 years. my main intrest area has always been working with data.
			I recently studied a bootcamp program in Georgia Tech.</p>
                </div>
                <div className="work__head">
                    <h6 className='work__head-title'>Work</h6>
                    <button className='work__head-btn'>runing project with ArcGIS software</button>
                    <span></span>
                </div>
                <div className="work__head-body">
                    <ul className='work__head-body-items'>
                        <li className='work__head-body-item'>
                            <h5 className='work__head-body-item-heads'>
                                Engineering
                            </h5>
                            <p className='work__head-body-item-para'>
                           I have worked for 1 year as an technecian in concrete design Lab for mainatance the pavement of the roads.
                            </p>
                        </li>
                        <li className='work__head-body-item'>
                            <p className='work__head-body-item-para'>
                               working with ArcGIS
                            </p>
                        </li>
                        <li className='work__head-body-item'>
                            <h5 className='work__head-body-item-head'>
                                Teaching
                            </h5>
                            
                            <p className='work__head-body-item-para'>Teaching mathematics to high school students for 3 years.</p>
                        </li>

                    </ul>
                </div>
                <div className="work__head-footer">
                    <div className="work__head-footer-title">
                        <h4 className='work__head-footer-title-text'>Project</h4>

                    </div>
                    <a href='https://github.com' target='_blank' className="work__head-footer-item">
                        <img src="/astronaut-152023.png" alt="about" />
                    </a>
                    <a href='https://github.com/' target='_blank' className="work__head-footer-item">
                        <img src="/Untitled2jpg" alt="about" />
                    </a>
                    <a href='https://github.com/' target='_blank' className="work__head-footer-item">
                        <img src="/Untitled.jpg" alt="about" />
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}
