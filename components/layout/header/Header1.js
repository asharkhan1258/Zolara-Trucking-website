import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>

            <header className={`header-section cmn-fixed py-lg-0 py-6 ${scroll ? "animated fadeInDown header-fixed" : ""}`}>
                <div className="container">
                    <div className="main-navbar">
                        <nav className="navbar-custom">
                            <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link href="/" className="brand-logo">
                                        {/* <img className="img-fluid  d-lg-block d-none " width="60%" src="assets/img/Untitled design (7).png" alt="logo"  />
                                        <img className="img-fluid d-lg-none d-block"  src="assets/img/Untitled design (7).png" alt="logo"  /> */}
                                        <h2 className=" text-decoration-none  " >ZOLARA LOGISTICS LLC</h2>
                                    </Link>
                                    <div className="d-flex align-items-center gap-xxl-5 gap-5">
                                        <Link href="/javascript:void(0)" className="search-trigger search-icon d-lg-none d-block">
                                            <i className="fal fa-search" />
                                        </Link>
                                        <button className={`navbar-toggle-btn d-block d-lg-none ${isMobileMenu ? "open" : ""}`} type="button" onClick={handleMobileMenu}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                                <div className="navbar-toggle-item" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                                    <Menu />
                                </div>
                              
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
