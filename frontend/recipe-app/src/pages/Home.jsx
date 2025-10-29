import React from "react";
import foodRecipe from "../assets/foodRecipe.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            doloremque adipisci porro consequuntur accusantium mollitia nemo
            assumenda voluptatibus ex rem consectetur odit, repudiandae ea iure
            dignissimos dolor dicta explicabo officiis?
          </h5>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img src={foodRecipe} width="320px" height="300px" />
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,202.7C840,203,960,245,1080,272C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Home;
