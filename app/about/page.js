'use client'
import Layout from "@/components/layout/Layout"
import Testimonial1 from "@/components/sections/Testimonial1"
import TextSLider2 from "@/components/sections/TextSLider2"
import Link from "next/link"
import { Tilt } from 'react-tilt'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

const toltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
}
export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="About Us">
                <div>
                    <section className="pt-space pb-space ">
                        <div className="container">
                            <div className="row g-6 justify-content-between">
                                <div className="col-lg-6 pe-lg-14">
                                    <div className="d-flex gap-xxl-7 gap-xl-5 gap-4 position-relative z-index-1">
                                        <div className="about-small-thumb w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                            <img src="/assets/img/new/i (2).webp" alt="img" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-samll-content">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                ABOUT Us
                                            </div>
                                            <h2 className="stitle d-flex align-items-center mb-xxl-8 mb-xl-7 mb-lg-6 mb-5 gap-xxl-7 gap-xl-5 gap-3" data-aos="zoom-in-left" data-aos-duration={1700}>
                                            Your Trusted Logistics Partner, Delivering Efficiency and Reliability
                                            </h2>
                                            <p className="white-clr mb-xxl-8 mb-xl-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1400}>
                                            <span style={{color:"#E3FF04"}} >ZOLARA  IS A TRUSTEd LEADER </span> in the freight and logistics industry, dedicated to delivering seamless and reliable shipping solutions. Specializing in road, air, and ocean freight, we provide customized services that ensure your goods reach their destination safely and on time. With a strong global network, cutting-edge technology, and a customer-first approach, we make logistics simple and efficient. Our mission is to empower businesses with innovative freight solutions, while our vision is to be your most reliable logistics partner. <span style={{color:"#E3FF04"}} >CHOSE ZOLARA FOR EXCELLENCE</span> , transparency, and sustainability in every shipment.
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Cmn About End */}
               
                    {/* Testimonial version2 Start */}
                    <section className="pt-space pb-space bg2-clr">
                        {/* <div className="container">
                            <div className="row g-md-5 g-6 align-items-end justify-content-between bb-border pb-xxl-15 pb-lg-10 pb-9 mb-xxl-15 mb-lg-10 mb-9">
                                <div className="col-12">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1500}>
                                                Testimonials
                                            </div>
                                            <h2 className="stitle" data-aos="zoom-in" data-aos-duration={1800}>
                                                Some Of Our <span className="fw-400">Respected</span> Happy Clients Say
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div> */}
                        <TextSLider2/>
                            <Testimonial1/>
                    </section>
                </div>

            </Layout>
        </>
    )
}