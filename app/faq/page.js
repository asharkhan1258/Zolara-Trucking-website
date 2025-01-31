'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
    const [isAccordion, setIsAccordion] = useState(0)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="FAQ’S">
                <section className="Faqs-section pt-space pb-space">
                    <div className="container">
                        <div className="faqs-title text-center mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-9 mb-sm-8 mb-7">
                            <Link href="/blog-details" className="radius-btn cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                FAQ’S
                            </Link>
                            <h2 className="stitle">
                                Frequently asked <span className="fw-400">questions</span>
                            </h2>
                        </div>
                        <div className="row g-xxl-7 g-lg-6 g-0 justify-content-center">
                            <div className="col-lg-9">
                                <div className="faq">
                                    <div className="accordion-section">
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 1 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(1)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                How does your technology help my business?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                    Our advanced platform helps businesses automate their logistics, from tracking shipments to managing routes and optimizing delivery schedules. It's designed to save you time and money, while providing more visibility and control.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 2 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(2)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                What makes your dispatch service different from others?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                    We go beyond just finding loads for you. Our team handles all the details—paperwork, communication with shippers, and ensuring everything runs smoothly. You get the support you need so you can keep driving.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 3 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(3)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                What types of businesses do you work with?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                    We work with businesses of all sizes, from small local companies to large enterprises. If you need reliable, fast, and cost-effective freight solutions, we’re here to help.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 4 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(4)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                How can I sign up for your services?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                    Simply contact us via our website or give us a call to get started. We’ll discuss your needs and get you set up with the right services
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="faq">
                                    <div className="accordion-section">
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 5 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(5)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    How long should a business plan be?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis
                                                        semper odio. Mauris et mollis quam. Nullam
                                                        fringilla erat id ante commodo sodales. In maximus ultrices euismod.
                                                        Vivamus porta justo ex.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 6 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(6)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    What is included in your services?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis
                                                        semper odio. Mauris et mollis quam. Nullam
                                                        fringilla erat id ante commodo sodales. In maximus ultrices euismod.
                                                        Vivamus porta justo ex.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 7 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(7)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    What type of company is measured?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 7 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis
                                                        semper odio. Mauris et mollis quam. Nullam
                                                        fringilla erat id ante commodo sodales. In maximus ultrices euismod.
                                                        Vivamus porta justo ex.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`accordion-single mb-xxl-4 mb-4 py-xxl-7 py-xl-6 py-lg-4 py-3 px-xxl-8 px-xl-7 px-lg-6 px-4 ${isAccordion === 8 ? "active" : ""}`}>
                                            <h5 className="header-area " onClick={() => handleAccordion(8)}>
                                                <button className="accordion-btn d-flex align-items-center    text-start d-flex position-relative w-100" type="button">
                                                    What type of company is measured?
                                                </button>
                                            </h5>
                                            <div className="content-area" style={{ display: `${isAccordion == 8 ? "block" : "none"}` }}>
                                                <div className="content-body pt-4">
                                                    <p className="pra-clr">
                                                        Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis
                                                        semper odio. Mauris et mollis quam. Nullam
                                                        fringilla erat id ante commodo sodales. In maximus ultrices euismod.
                                                        Vivamus porta justo ex.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}