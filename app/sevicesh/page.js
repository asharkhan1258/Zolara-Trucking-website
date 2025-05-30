'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Servicesh() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
            <>

            <section className="service-section pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title ">
                         
                            <h5 className="stitle glow text-center mx-auto"style={{fontSize:"35px"}}>
                            How shippers win with Shared Truckload (STL) 
                            </h5>
                        </div>
                        
                    </div>
                    {/*Service Tabing section*/}
                    <div className="row g-xxl-7 g-xl-6 g-4 mt-5">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/sevices-h/maxresdefault.jpg " alt="img" className="w-100 overflow-hidden " />
                                </div>
                                <div className="blog-cont">
                                    
                                    <h5>
                                        <Link href="/" className="white-clr">
                                        Only pay for the space you need
                                        </Link>
                                    </h5>
                                    <p>
                                        Improve your bottom line without sacrificing service quality. With linear-foot and pallet-based pricing, shippers save an average of 20% compared to truckload.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/sevices-h/trucks_at_dock_waiting.64542313bff41.avif" alt="img" className="w-100 overflow-hidden " />
                                </div>
                                <div className="blog-cont">
                                    
                                    <h5>
                                        <Link href="/" className="white-clr">
                                        Truckload-level service
                                        </Link>
                                    </h5>
                                    <p>Enjoy the speed and reliability of truckload service, without waiting to fill an entire truck. STL enables you to move freight on demand while meeting strict pickup and delivery requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-item">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                    <img src="/assets/img/sevices-h/truckdrivers.jpg" alt="img" className="w-100 overflow-hidden" />
                                </div>
                                <div className="blog-cont">
                                    
                                    <h5>
                                        <Link href="/" className="white-clr">
                                        Effortless implementation
                                        </Link>
                                    </h5>
                                    <p>STL seamlessly integrates with your systems and processes, delivering the benefits of truckload service without the price tag. Easily quote, book, and track via your TMS or directly in the Flock Platform.</p>

                                </div>
                            </div>
                        </div>
                    
                       
                    </div>
                    </div>
            </section>
        </>
            )
}
