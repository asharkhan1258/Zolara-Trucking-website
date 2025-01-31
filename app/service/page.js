'use client'
import Layout from "@/components/layout/Layout"
import Service1 from "@/components/sections/Service1"
import Link from "next/link"
import { useState } from 'react'
export default function Service() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Our Services">
                <div>
                  <Service1/>
                    {/* Text SLider Start */}
                    {/* <div className="digital-solution mb-xxl-4 pb-lg-0 pb-15">
                        <div className="mycustom-marque">
                            <div className="scrolling-wrap">
                                <div className="comm">
                                    <div className="cmn-textslide">DIGITAL solutions</div>
                                    <div className="cmn-textslide text-custom-storke">DIGITAL solutions</div>
                                    <div><img src="/assets/img/client/text-slide.png" alt="img" /></div>
                                </div>
                                <div className="comm">
                                    <div className="cmn-textslide">DIGITAL solutions</div>
                                    <div className="cmn-textslide text-custom-storke">DIGITAL solutions</div>
                                    <div><img src="/assets/img/client/text-slide.png" alt="img" /></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Text Slider End */}
                    {/* Pricing Plan Start */}
                  
                </div>

            </Layout>
        </>
    )
}