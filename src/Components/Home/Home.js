import React from 'react'
import { Link } from 'react-router-dom'
import dairyPng from '../../Images/dairy.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
<div className="hero min-h-[80vh] "  >
<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
       
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.8,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={dairyPng} className="max-w-[300px] md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold w-[80%]">Welcome To Darkfam Virtual Diary</h1>
      <p className="py-6 text-2xl capitalize">write your precious memories...</p> 
      <Link to="/dairy"><button className="btn btn-primary">Get Started</button> </Link>
    </div>
  </div>
</div>
   
  )
}

export default Home