"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import workOne from "@/public/assets/img/work/work1.jpg";
import workTwo from "@/public/assets/img/work/work3.jpeg";
import workThree from "@/public/assets/img/work/work5.jpg";
import workFour from "@/public/assets/img/work/workFour.jpeg";
import workFive from "@/public/assets/img/work/workFive.jpg";
import workSix from "@/public/assets/img/work/work6.jpg";

export default function Work() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const [screenWidth, setScreenWidth] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  // Track screen width dynamically
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  // Handle animations based on `inView` and `screenWidth`
  useEffect(() => {
    if (inView) {
      setIsFixed(true);
      if (screenWidth > 1024) {
        controls.start({ fontSize: "21rem", fontWeight: 900 });
      } else if (screenWidth > 768) {
        controls.start({ fontSize: "13rem", fontWeight: 900 });
      } else {
        controls.start({ fontSize: "7rem", fontWeight: 900 });
      }
    } else {
      setIsFixed(false);
      if (screenWidth > 768) {
        controls.start({ fontSize: "8rem", fontWeight: 700 });
      } else {
        controls.start({ fontSize: "5rem", fontWeight: 700 });
      }
    }
  }, [controls, inView, screenWidth]);
  
  const images = [workOne, workTwo, workThree, workFour, workFive, workSix];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px",
      }}
    >
      <div
        ref={ref}
        style={{
          width: "100%",
          maxWidth: "1200px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.h1
          initial={{ fontSize: "3rem", fontWeight: 400 }}
          animate={controls}
          transition={{ duration: 0.2 }}
          style={{
            position: isFixed ? "fixed" : "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            marginTop: "-104px",
          }}
        >
          WORK
        </motion.h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${
              screenWidth > 1024 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
            }`,
            gap: `${screenWidth > 1024 ? "40px" : "24px"}`,
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 0",
            width: "100%",
            maxWidth: "1000px",
            zIndex: "2",
            margin: `${screenWidth > 1024 ? "320px 0px 0px 0px" : "0px"}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width:
                screenWidth > 1024 ? "100%" : screenWidth > 768 ? "70%" : "90%",
              margin: `${screenWidth > 1024 ? "0px" : "0px auto"}`,
            }}
          >
            {images.slice(0, 3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 50,
                  damping: 12,
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={image}
                  alt={`work-${index + 1}`}
                  width={400}
                  height={300}
                  style={{
                    width: "100%",
                    height: `${
                      screenWidth > 1024
                        ? "540px"
                        : screenWidth > 768
                        ? "700px"
                        : "400px"
                    }`,
                    borderRadius: "10px",
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </motion.div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width:
                screenWidth > 1024 ? "100%" : screenWidth > 768 ? "70%" : "90%",

              margin: `${
                screenWidth > 1024 ? "240px 0px 0px 0px" : "0px auto"
              }`,
            }}
          >
            {images.slice(3, 6).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 50,
                  damping: 12,
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={image}
                  alt={`work-${index + 1}`}
                  width={400}
                  height={300}
                  style={{
                    width: "100%",
                    height: `${
                      screenWidth > 1024
                        ? "540px"
                        : screenWidth > 768
                        ? "700px"
                        : "400px"
                    }`,
                    borderRadius: "10px",
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FFD700",
            color: "#000",
            boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            padding: "72px 32px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "88px",
            border: "2px solid #FFD700",
            background: "transparent",
            color: "#FFD700",
            outline: "none",
            cursor: "pointer",
            marginTop: "50px",
            marginBottom: "45px",
          }}
        >
          Contact Us <GoArrowUpRight size={20} />
        </motion.button>
      </div>
    </div>
  );
}
