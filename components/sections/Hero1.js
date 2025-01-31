
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Hero1() {
    return (
        <>
            
            <section className="hero-section-version1 position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v1-content position-relative">
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between">
                                <h1 className="white-clr text-uppercase">
                                    <p>Your Trusted Freight Partner</p>
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                    Welcome to 
                                        <span className="designers" data-text="ZOLARA" data-aos="zoom-in" data-aos-duration={2000}>ZOLARA </span>
                                    </span>
                                    <p className="lh-base w-75 mt-4 fw-semibold text-white  p-2"  style={{backgroundColor: "#46454515"}} >At ZOLARA , we specialize in delivering tailored freight solutions for businesses and supply chain companies. With a commitment to excellence, reliability, and efficiency, we ensure your cargo reaches its destination on time, every time.</p>
                                  
                                </h1>
                                {/* <VideoPopup style={1}/> */}
                            </div>
                            <div className="hero-sponsor">
                                
                                <div className="brandin-wrap d-block">
                                    <h4 className="white-clr brading-text fw-bold">
                                        25k + projects Completed
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Exprience box */}
             
                {/* Element */}
            </section>
        </>
    )
}
