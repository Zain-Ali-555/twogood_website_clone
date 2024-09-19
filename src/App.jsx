/* eslint-disable no-unused-vars */
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Products from "./Components/Products";
import Thanks from "./Components/Thanks";
import OurImpact from "./Components/OurImpact";
import Footer from "./Components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const locomotiveScroll = new LocomotiveScroll();

  useGSAP(() => {
    // NavBar Animations

    let navBar = document.querySelector(".nav");
    gsap.to(navBar, { opacity: 1, duration: 0.5, y: 20 });
    gsap.to(".logos", {
      y: -90,
      ease: "sine.in",
      scrollTrigger: {
        trigger: ".logos",
        start: "60% top",
        end: "80% top",
        scrub: true,
      },
    });

    document.querySelectorAll(".links").forEach((links) => {
      gsap.to(links, {
        color: "transparent",
        y: -100,
        ease: "sine.in",
        scrollTrigger: {
          trigger: links,
          start: "50% top",
          scrub: true,
        },
      });
    });

    // Landing PAge Animation

    let videoCrsrAnimation = () => {
      let crsr = document.querySelector(".crsr");
      let vdo = document.querySelector(".video");
    
      // Mousemove event for the video container
      vdo.addEventListener("mousemove", (details) => {
        // Update cursor position using GSAP
        gsap.to(crsr, {
          x: details.clientX,
          y: details.clientY,
          ease: "power2.out"
        });
      });
    
      // Mouseenter event to change cursor when entering the video container
      vdo.addEventListener("mouseenter", () => {
        crsr.innerHTML = "PLAY";
        crsr.style.backgroundColor = "black";
        crsr.style.color = "white";
        gsap.to(crsr, {
          scale: 4,
          ease: "power2.out"
        });
      });
    
      // Mouseleave event to reset cursor when leaving the video container
      vdo.addEventListener("mouseleave", () => {
        crsr.innerHTML = "";
        crsr.style.backgroundColor = "black";
        gsap.to(crsr, {
          scale: 0.0000001,
          ease: "power2.out"
        });
      });
    };
    
    videoCrsrAnimation();
    
    let textAnimationFun = () => {
      let text = document.querySelectorAll(".txt");
      gsap.from(text, {
        y: 800,
        color: "white",
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        ease: "expo.out",
      });
      let textBox = document.querySelectorAll(".innerTxt");
      gsap.from(textBox, {
        y: 500,
        color: "white",
        opacity: 0,
        delay: 0.9,
        duration: 0.6,
        ease: "expo",
        stagger: 0.15,
      });
    };

    textAnimationFun();

    // Products Animation

    let cursor = document.querySelector(".cursor");
    let productsDiv = document.querySelector(".products");
    let leftDiv = document.querySelector(".products .left");
    let rightDiv = document.querySelector(".products .right");
    productsDiv.addEventListener("mousemove", (dets) => {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        scale: 1,
        // duration: .8,
      });
    });
    productsDiv.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
      });
    });
    leftDiv.addEventListener("mouseenter", () => {
      cursor.style.backgroundColor = "#bababa2e";
      gsap.to(cursor, {
        duration: 1,
      });
    });
    rightDiv.addEventListener("mouseenter", () => {
      cursor.style.backgroundColor = "#23262e25";
      gsap.to(cursor, {
        duration: 1,
      });
    });
  });

  return (
    <>
      <div className="main relative w-full bg-[#f7f7f7]">
        <Navbar />
        <LandingPage />
        <Cards />
        <About />
        <Products />
        <Thanks />
        <OurImpact /> {/*  and Input Tag  */}
        <Footer />
      </div>
    </>
  );
};

export default App;
