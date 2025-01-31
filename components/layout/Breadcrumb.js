import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="breadcrumnd-banner position-relative">
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-7">
                            <div className="breadcrumnd-content text-center">
                                <h1 className="white mb-xxl-10 mb-xl-8 mb-6" data-aos="zoom-in-left" data-aos-duration={1800}>
                                    {breadcrumbTitle}
                                </h1>
                                <ul className="breadcrumnd d-inline-flex align-items-center gap-2 pra-border radius100 py-xxl-3 py-2 px-xxl-4 px-4" data-aos="zoom-in-right" data-aos-duration={2000}>
                                    <li>
                                        <Link href="/" className="text-uppercase htheme">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="rot60 d-inline-block">
                                            <i className="fas fa-arrow-up" />
                                        </span>
                                    </li>
                                    <li className="theme-clr">
                                        {breadcrumbTitle}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Element*/}
              
            </section>

        </>
    )
}
