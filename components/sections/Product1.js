

export default function Product1() {
    return (
        <>

            <section className="about-product pt-space">
                <div className="container">
                    <div className="row g-xxl-7 g-5">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="about-product-thumb w-100" data-aos="zoom-in" data-aos-duration={2000}>
                                <img src="/assets/img/new/clients.jpg" alt="img" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-product-content ps-xxl-10">
                                <div className="pricing-title">
                                    {/* <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5" data-aos="fade-up-right" data-aos-duration={1500}>
                                    Why Choose Us?
                                    </div> */}
                                    <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4 theme-clr" data-aos="fade-up" data-aos-duration={1600}>
                                    Why Choose Us?<span className="fw-400 "></span>
                                    </h2>
                                    <h3></h3>
                                    <p className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6 fw-semibold" data-aos="fade-up" data-aos-duration={1900}>
                                    At Zolara, we bring years of experience and expertise to the logistics industry, enabling us to navigate its complexities and provide streamlined solutions for all your freight needs. Leveraging cutting-edge technology, our advanced <span className="theme-clr">tracking systems</span>  ensure complete visibility of your shipments, keeping you informed at every step of the journey. Additionally, our services are <span className="theme-clr">highly customizable</span>, whether you require a one-time shipment or ongoing logistical support, allowing us to tailor solutions that perfectly align with your business requirements.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
