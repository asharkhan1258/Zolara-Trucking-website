
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
                                    <p style={{color: "#E3ff04 "}}>Your Trusted Freight Partner</p>
                                    <span className="d-block" style={{fontSize:"45px", width:"65%"}} data-aos="zoom-in-left" data-aos-duration={1800}>
                                    Enjoy the advantages of truckload shipping while only paying for the space you need
                                        {/* <span className="designers" data-text="ZOLARA" data-aos="zoom-in" data-aos-duration={2000}>ZOLARA </span> */}
                                    </span>
                                    <p className="lh-base w-75 mt-4 fw-semibold text-white  p-2"  style={{backgroundColor: "#46454515"}} >Shippers enjoy cost savings and better service, carriers increase earnings, and we all lower our carbon footprint.</p>
                                  
                                   <div className="gap-5 d-flex align-items-center  mt-5">
                                    <button className="fs-5 px-5  " style={{backgroundColor : "#e3ff04", color : "white", borderRadius: "50px", lineHeight: "50px" , border : "2px solid #e3ff04" }}>Start Shipping</button>
                                    <button className="fs-5 px-5  " style={{ color : "white", borderRadius: "50px", lineHeight: "50px" , border : "2px solid white" }}>Start Hauling</button>
                                </div>
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
