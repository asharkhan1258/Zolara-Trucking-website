import Layout from "@/components/layout/Layout";

import CaseStudy1 from "@/components/sections/CaseStudy1";
import Hero1 from "@/components/sections/Hero1";
import Product1 from "@/components/sections/Product1";
import Service1 from "@/components/sections/Service1";
import Team1 from "@/components/sections/Team1";
import Testimonial1 from "@/components/sections/Testimonial1";

import TextSLider2 from "@/components/sections/TextSLider2";

import Watch1 from "@/components/sections/Watch1";
import CustomCursor from "./work/page"; 
import Work from "@/components/sections/Work";
import Servicesh from "./sevicesh/page";

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <CustomCursor /> {/* Add CustomCursor component here */}
                    <Hero1 />
                    <Product1 />
                    <Servicesh/>
                    <Service1 />
                    <CaseStudy1 />  
                    <Work/>
                    <Watch1 />
                    {/* <Team1 /> */}
                    {/* <TextSLider2 /> */}
                    <Testimonial1 />
                 
                </div>
            </Layout>
        </>
    );
}
