
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogGrid() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Blogs">
                <section className="blog-grid pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-6">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="assets/img/banner/63321c1290c51908641819.jpg" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                            Efficient Freight Solutions for Businesses
                                            </Link>
                                        </h5>
                                        <p className="fw-semibold mt-2 " >Discover how streamlined logistics can enhance your supply chain and reduce delivery times</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="assets/img/banner/65472a12c73191fd37daccb22046ebbe.jpeg" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                            Safety Tips for Long-Haul Trucking
                                            </Link>
                                        </h5>
                                    </div>
                                 <p className="fw-semibold mt-2 " >Learn essential safety practices for truck drivers to ensure smooth and secure journeys.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="assets/img/banner/maxresdefault.jpg" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                            The Future of Trucking Technology
                                            </Link>
                                        </h5>
                                    </div>
                                 <p className="fw-semibold mt-2 " >Explore the latest innovations in trucking, from GPS tracking to automated fleet management.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="assets/img/banner/a866f207951598336637b67708b42df3.jpeg" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                            How to Reduce Fuel Costs in Trucking
                                            </Link>
                                        </h5>
                                    </div>
                                 <p className="fw-semibold mt-2 " >Get expert tips on optimizing fuel efficiency and cutting operational expenses</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="assets/img/banner/HANDSHAKE.webp" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                            Choosing the Right Trucking Partner
                                            </Link>
                                        </h5>
                                    </div>
                                 <p className="fw-semibold mt-2 " >Understand key factors to consider when selecting a reliable freight service provider.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog-widget-item">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="assets/img/banner/i.webp" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <h5>
                                            <Link href="/blog-details" className="white-clr">
                                            Impact of Regulations on the Trucking Industry
                                            </Link>
                                        </h5>
                                    </div>
                                 <p className="fw-semibold mt-2 " >Stay updated on government policies and how they affect logistics and transportation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}